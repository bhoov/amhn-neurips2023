"""Train a simple Hopfield Network by inserting images into each row of memory, 
converting the trained model into a TFJS model for serving on the frontend.

python train_hopfield_people.py data/speakers.yaml hopfield-frontend/static/models/speakers

"""
import argparse
from typing import *

parser = argparse.ArgumentParser()
parser.add_argument("people_yaml", type=str, help="yaml file containing description of people")
parser.add_argument("output_dir", type=str, help="Where to save all configuration for the frontend project")
parser.add_argument("--headshot_resolution_dir", type=str, default="static/img/headshots/128x170", help="Where to look for headshots")
parser.add_argument("--label_strength", type=float, default=20_000, help="How much more strongly to weight labels than pixels in the similarity functions")
parser.add_argument("--device", default="cpu", help="Which device to use, or cpu")
parser.add_argument("--mem_fraction", type=float, default=0.5, help="How much memory on GPU should JAX reserve if using GPU?")

args = parser.parse_args(["_data/speakers.yaml", "static/models/speakers"])

import os
os.environ["CUDA_VISIBLE_DEVICES"] = str(args.device)
os.environ["XLA_PYTHON_CLIENT_MEM_FRACTION"]=str(args.mem_fraction)

from loguru import logger
from PIL import Image
import yaml
import json
import numpy as np
from tqdm.auto import tqdm
from einops import rearrange
import jax
import jax.random as jr
import jax.numpy as jnp
import equinox as eqx
from typing import *
import optax
from typing import *
import jax.tree_util as jtu
import functools as ft
from sklearn.decomposition import PCA
from pathlib import Path

from tfjs_helpers import convert_jax
import functools as ft
import tensorflow as tf

output_dir = Path(args.output_dir)
output_dir.mkdir(exist_ok=True, parents=True)

logger.info("Loading yaml file")
with open(args.people_yaml, "r") as fp:
    people = yaml.safe_load(fp)
  
headshots = [Image.open(os.path.join(args.headshot_resolution_dir, person["headshot"])).convert('RGB') for person in people]
assert all(h.size == headshots[0].size for h in headshots)

imgs = np.stack([np.asarray(h) for h in headshots])
img_shape = imgs.shape[1:]
img_nelements = D = imgs[0].size
Nsamples = len(imgs)
h,w,c = img_shape

def to_imgs(x):
    x = rearrange(x, "... (h w c) -> ... h w c", h=h, w=w, c=c)
    
    if len(x.shape) < 4:
        return [Image.fromarray(np.uint8(x*255))]
    
    return [Image.fromarray(np.uint8(x_*255)) for x_ in x]
    
def to_vectors(x):
    return rearrange(x, "... h w c -> ... (h w c)") / 255.

logger.info("Creating Hopfield memory bank")
W = to_vectors(imgs)
labels = jnp.arange(Nsamples)

class LabelEnergyF(eqx.Module):
    W: jax.Array
    labelW: jax.Array
    beta: float
    
    def __init__(self, Winit:jax.Array,labelW_init: jax.Array, beta_init=1.):
        self.W = jnp.array(Winit)
        self.labelW =  jnp.array(labelW_init)
        self.beta = beta_init
        
    def __call__(self, x, labels, label_strength=1.):
        """Compute the energy of the memories given a particular label"""
        assert len(x.shape) < 2, "No batch dimension"

        sim = -jnp.sum(jnp.power(self.W - x, 2), -1)
        simlabel = label_strength * self.labelW @ labels
        energy = -jax.nn.logsumexp(self.beta * (sim + label_strength * simlabel))
        
        aux={}
        return energy, aux
    
labelW = jax.nn.one_hot(jnp.arange(Nsamples), num_classes=Nsamples)
am = LabelEnergyF(W, labelW, 10.)
logger.info("Training PCA")
pca_model = PCA(2).fit(W)
W2 = pca_model.transform(W)

x0 = jnp.array(W[0])

def energy_and_projection_step(am, pcomponents, pmean, x:jnp.array, label:int, alpha:float):
    n_classes = am.W.shape[0]
    label = jax.nn.one_hot(label, n_classes)
    (energy, aux), grad = jax.value_and_grad(am, argnums=0, has_aux=True)(x, label, label_strength=args.label_strength)
    x2 = x - alpha * grad
    
    X = x2 - pmean
    proj_x2 = X[None] @ jnp.array(pcomponents).T
    return x2, energy, proj_x2

logger.info("Testing energy projection step")
x2, e, proj_x2 = energy_and_projection_step(am, pca_model.components_, pca_model.mean_, x0, 5, 0.05)

stepfn = ft.partial(energy_and_projection_step, am, pca_model.components_, pca_model.mean_)

# Save model output
model_dir = "hopfield_model"
model_output_dir = output_dir / model_dir
logger.info(f"Converting to TFJS model in {model_output_dir}")
convert_jax(
    apply_fn=stepfn,
    input_signatures=[tf.TensorSpec((D,)), tf.TensorSpec(tuple(), dtype=tf.int32), tf.TensorSpec(tuple(), dtype=tf.float32)],
    model_dir=model_output_dir)

# Save model config
logger.info(f"Caching projection of original headshots")
listW2 = W2.tolist()
for i, person in enumerate(people):
    person['proj2d'] = listW2[i]
    
config = {}
config['people'] = people
config['model_dir'] = model_dir
config['img_size'] = list(img_shape)
config['Nsamples'] = Nsamples
config['nelements'] = img_nelements

logger.info(f"Saving configuration")

with open(output_dir / "config.json", "w") as fp:
    json.dump(config, fp)

logger.info(f"DONE")