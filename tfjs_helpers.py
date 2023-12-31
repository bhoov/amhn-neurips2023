import tensorflowjs as tfjs
import tensorflow as tf
import tempfile
from tensorflowjs.converters import tf_saved_model_conversion_v2 as saved_model_conversion
from jax.experimental import jax2tf
from typing import *

DType = Any
PolyShape = jax2tf.shape_poly.PolyShape
Array = Any 
_TF_SERVING_KEY = tf.saved_model.DEFAULT_SERVING_SIGNATURE_DEF_KEY

class _ReusableSavedModelWrapper(tf.train.Checkpoint):
    """Wraps a function and its parameters for saving to a SavedModel.
    Implements the interface described at
    https://www.tensorflow.org/hub/reusable_saved_models.
    """

    def __init__(self, tf_graph, param_vars):
        """Args:
          tf_graph: a tf.function taking one argument (the inputs), which can be
             be tuples/lists/dictionaries of np.ndarray or tensors. The function
             may have references to the tf.Variables in `param_vars`.
          param_vars: the parameters, as tuples/lists/dictionaries of tf.Variable,
             to be saved as the variables of the SavedModel.
        """
        super().__init__()
        # Implement the interface from https://www.tensorflow.org/hub/reusable_saved_models
        self.variables = tf.nest.flatten(param_vars)
        self.trainable_variables = [v for v in self.variables if v.trainable]
        # If you intend to prescribe regularization terms for users of the model,
        # add them as @tf.functions with no inputs to this list. Else drop this.
        self.regularization_losses = []
        self.__call__ = tf_graph

def convert_jax(
    apply_fn: Callable[..., Any],
    *,
    input_signatures: Sequence[Tuple[Sequence[Union[int, None]], DType]],
    model_dir: str,
    polymorphic_shapes: Optional[Sequence[Union[str, PolyShape]]] = None):
    """Converts a JAX function `apply_fn` to a TensorflowJS model. 
    Works with `functools.partial` style models if we don't need to access the variables in the frontend.

    Example usage for an arbitrary function:

    ```
    import functools as ft
    import tensorflow as tf
    
    def energy_and_projection_step(am, pcomponents, x:jnp.array, label:int, alpha:float):
        ...

    fn = ft.partial(predict_fn, trained_model, jnp.array(pcomponents))

    convert_jax(
        apply_fn=fn,
        input_signatures=[tf.TensorSpec((D,)), tf.TensorSpec(tuple(), dtype=tf.int32), tf.TensorSpec(tuple(), dtype=tf.float32)],
        model_dir=tfjs_model_dir) # Saves model to binary files that can be loaded by tfjs
    ```

    Note that when using dynamic shapes, an additional argument
    `polymorphic_shapes` should be provided specifying values for the dynamic
    ("polymorphic") dimensions). See here for more details:
    https://github.com/google/jax/tree/main/jax/experimental/jax2tf#shape-polymorphic-conversion

    This is an adaption of the original implementation in jax2tf here:
    https://github.com/google/jax/blob/main/jax/experimental/jax2tf/examples/saved_model_lib.py

    Arguments:
    apply_fn: A JAX function that has one or more arguments, of which the first
      argument are the model parameters. This function typically is the forward
      pass of the network (e.g., `Module.apply()` in Flax).
    input_signatures: the input signatures for the second and remaining
      arguments to `apply_fn` (the input). A signature must be a
      `tensorflow.TensorSpec` instance, or a (nested) tuple/list/dictionary
      thereof with a structure matching the second argument of `apply_fn`.
    model_dir: Directory where the TensorflowJS model will be written to.
    polymorphic_shapes: If given then it will be used as the
      `polymorphic_shapes` argument for the second parameter of `apply_fn`. In
      this case, a single `input_signatures` is supported, and should have
      `None` in the polymorphic (dynamic) dimensions.
    """

    tf_fn = jax2tf.convert(
        apply_fn,
        # Gradients must be included as 'PreventGradient' is not supported.
        with_gradient=True,
        polymorphic_shapes=polymorphic_shapes,
        # Do not use TFXLA Ops because these aren't supported by TFjs, but use
        # workarounds instead. More information:
        # https://github.com/google/jax/tree/main/jax/experimental/jax2tf#tensorflow-xla-ops
        enable_xla=False)

    # Create tf.Variables for the parameters. If you want more useful variable
    # names, you can use `tree.map_structure_with_path` from the `dm-tree`
    # package.
    # For HAMUX we presume that the variables are inaccessible, for now
    param_vars = []
    # param_vars = tf.nest.map_structure(
    #     lambda param: tf.Variable(param, trainable=False), params)
    # Do not use TF's jit compilation on the function.
    tf_graph = tf.function(
        lambda *xs: tf_fn(*xs), autograph=False, jit_compile=False)

    # This signature is needed for TensorFlow Serving use.
    signatures = {
        _TF_SERVING_KEY: tf_graph.get_concrete_function(*input_signatures)
    }

    wrapper = _ReusableSavedModelWrapper(tf_graph, param_vars)
    saved_model_options = tf.saved_model.SaveOptions(
        experimental_custom_gradients=True)

    with tempfile.TemporaryDirectory() as saved_model_dir:
        tf.saved_model.save(
            wrapper,
            saved_model_dir,
            signatures=signatures,
            options=saved_model_options)
        saved_model_conversion.convert_tf_saved_model(saved_model_dir, model_dir, skip_op_check=True)