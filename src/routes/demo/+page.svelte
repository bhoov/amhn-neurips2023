<script lang="ts">
  import PeopleDynamicsFromFolder from "$lib/components/PeopleDynamicsFromFolder.svelte";
  import Katex from "svelte-katex";
  import { math, display, align, alignStar } from "mathlifier"; // `math` for inline, `display` for block
</script>

<div class="contentWrap">
  <div class="content">
    <div class="content">
      <div class="spread">
        <h2 id="demo-anatomy">The Anatomy of our Hopfield Network</h2>

        <blockquote>
          An <em>Associative Memory</em> is a dynamical system that is concerned
          with the memorization and retrieval of data.
        </blockquote>

        <p>
          The structure of our data in the demo above is a collection <code
            >(image, label)</code
          >
          pairs, where each image is represented as a rasterized vector of the RGB
          image {@html math(String.raw`x \in \mathbb{R}^{3N_\mathrm{pixels}}`)} and
          each label
          {@html math(String.raw`y \in \mathbb{R}^{N_\mathrm{people}}`)} identifies
          a person and is represented as a one-hot vector.
        </p>

        <p>
          The Associative Memory defines an energy function {@html math(
            String.raw`E_\theta(x,y)`
          )} parameterized by weights {@html math(String.raw`\theta`)} that is LOW
          when the image
          {@html math(String.raw`x`)} and the label {@html math(String.raw`y`)} are
          aligned <span class="aside">(look like real data)</span> and HIGH
          everywhere else
          <span class="aside"
            >(so that our energy function places real data at local energy
            minima)</span
          >. In this demo we choose a simple energy function that allows us to
          manually insert <em>memories</em>
          <span class="aside"
            >(the <code>(image,label)</code> pairs we want to show)
          </span>
          into the weights {@html math(
            String.raw`\theta = \left\{\theta^\mathrm{image} \in \mathbb{R}^{N_\mathrm{memories} \times 3N_\mathrm{pixels}},\;\; \theta^\mathrm{label} \in \mathbb{R}^{N_\mathrm{memories} \times N_\mathrm{people}}\right\}`
          )}.
        </p>
        <p>
          Let {@html math(
            String.raw`\mu = \left\{1,\ldots,N_\mathrm{memories} \right\}`
          )},
          {@html math(
            String.raw`i = \left\{ 1,\ldots,3N_\mathrm{pixels} \right\}`
          )} and {@html math(
            String.raw`k = \left\{1,\ldots,N_\mathrm{people} \right\}`
          )}. The energy function used in this demo is
        </p>

        <p>
          {@html align(
            String.raw`E_\theta(x, y) = -\log \sum\limits_{\mu} \exp \left( \beta \left[ -\sum\limits_{i} (\theta^{\mathrm{image}}_{\mu i} - x_i)^2  + \lambda \sum\limits_{k} \theta^\mathrm{label}_{\mu k} y_k \right] \right)`
          )}
        </p>

        <p>
          where {@html math(String.raw`\beta > 0`)} is an inverse temperature that
          controls the "spikiness" of the energy function around each memory
          <span class="aside"
            >(the spikier the energy landscape, the more memories can be stored)</span
          >
          and we introduce {@html math(String.raw`\lambda > 1`)} to encourage the
          dynamics to align with the label. We use L2 similarity
          <span class="aside"
            >{@html math(
              String.raw`\;\mathrm{L2}(a,b) = - \sum\limits_j (a_j - b_j)^2`
            )}
          </span>
          to capture the alignment of images to the memories stored in
          {@html math(String.raw`\theta^\mathrm{image}`)} and cosine similarity
          <span class="aside"
            >{@html math(
              String.raw`\;\mathrm{cossim}(a,b) = \sum\limits_j a_j  b_j`
            )} (where {@html math(String.raw`||a||_1 = ||b||_1 = 1`)})
          </span>
          to capture the alignment of labels to memories stored in {@html math(
            String.raw`\theta^\mathrm{label}`
          )}.
        </p>
        <p>
          This energy function {@html math(String.raw`E_\theta(x,y)`)} turns our
          images and labels into dynamic variables that evolve according to the following
          differential equations:
        </p>

        <p>
          {@html alignStar(String.raw`
          \tau_x \frac{dx}{dt} &= -\nabla_x E_\theta\\
          \tau_y \frac{dy}{dt} &= -\nabla_y E_\theta\\
          `)}
        </p>

        <p>
          where {@html math(String.raw`\tau_x`)} and {@html math(
            String.raw`\tau_y`
          )} define how quickly the states evolve. Note that in the demo we treat
          our network as an <em>image generator</em> by clamping the labels
          <span class="aside"
            >(forcing {@html math(String.raw`\frac{dy}{dt} = 0`)})</span
          >. We could similarly use the same Associative Memory as a
          <em>classifier</em>
          by clamping the image
          <span class="aside"
            >(forcing {@html math(String.raw`\frac{dx}{dt} = 0`)})</span
          > and allowing only the label to evolve.
        </p>

        <p>
          It is actually convenient to define a third dynamic variable {@html math(
            String.raw`z_\mu \triangleq  -\sum\limits_{i} (\theta^{\mathrm{image}}_{\mu i} - x_i)^2  + \lambda \sum\limits_{k} \theta^\mathrm{label}_{\mu k} y_k `
          )} that captures the similarity of {@html math(String.raw`(x,y)`)} to the
          {@html math(String.raw`\mu`)}th memory
          <span class="aside"
            >({@html math(String.raw`z_\mu`)} is dynamic in the sense that it evolves
            in time as a function of
            {@html math(String.raw`x`)} and {@html math(String.raw`y`)})</span
          >. This allows us to reduce visual clutter of the energy function to
        </p>

        <p>
          {@html align(
            String.raw`E_\theta(x, y) = -\log \sum\limits_{\mu} \exp \left( \beta \, z_\mu \right)`
          )}
        </p>

        <p>
          Our demo can be visualized as a graph where <em
            >nodes</em
          >
          represent dynamic variables and <em>edges</em> capture node similarities
          to the stored weights. In our energy function, we have three nodes and
          two edges:
        </p>

        <ul>
          <li>
            <strong>Image node {@html math(String.raw`x`)}</strong> representing
            the state of our image
          </li>
          <li>
            <strong>Label node {@html math(String.raw`y`)}</strong> representing
            the state of our label
          </li>
          <li>
            <strong>Hidden node {@html math(String.raw`z`)}</strong> representing
            the computed similarities
          </li>
          <li>
            <strong>Edge {@html math(String.raw`(x,z)`)}</strong> capturing the similarity
            of the presented image to our memorized images
          </li>
          <li>
            <strong>Edge {@html math(String.raw`(y,z)`)}</strong> capturing the similarity
            of the presented label to our memorized labels
          </li>
        </ul>

        <p />
      </div>
    </div>
    <h2 id="exploring-hopfield">Exploring Hopfield Networks</h2>

    <p>
      <a href="http://www.scholarpedia.org/article/Hopfield_network"
        >Hopfield Networks</a
      >
      are associative memories concerned with the storage and retrieval of data using
      a
      <a href="https://en.wikipedia.org/wiki/Lyapunov_function"
        >Lyapunov function</a
      >
      <span class="aside">("energy function")</span>. A Hopfield Network's
      <em>memories</em>
      are stored at local minima of this energy function. Given an initial data point,
      Hopfield Networks retrieve memories
      <span class="aside">(perform "inference")</span>
      by explicitly descending the energy
      <span class="aside">(following the negative gradient of the energy)</span
      >. This inference process is a dynamical system that is guaranteed to
      converge to the fixed points <span class="aside">("memories")</span>.
    </p>

    <p>
      In the exploratory spirit of this workshop, we have built a Hopfield
      Network demo that runs live in your web browser. The data stored in the
      network are the headshots of each person mentioned on the <a href="/"
        >landing page</a
      >. The animation below has two states:
    </p>

    <ol>
      <li>the selected person <span class="aside">(the "label")</span></li>
      <li>
        the currently displayed image <span class="aside"
          >(the "dynamic state")</span
        >
      </li>
    </ol>

    <p>
      At every step, we display the recent history of energy values as a
      lineplot alongside a 2-D PCA projection of the current dynamic state <span
        class="aside">(image)</span
      >. Watch as the dynamic state moves around the energy landscape
      characterized by local minima at each person!
    </p>
    <p>
      The animation runs continously, taking small steps down the predicted
      energy of each <code>(label, dynamic state)</code> pair. If it looks like
      the animation stops running when the picture is clear, it is only because
      we have reached the appropriate local minimum of the energy: the model is
      still subtracting the energy gradient from the image
      <span class="aside"
        >(it so happens that the energy gradient is zero when the dynamic state
        equals the original headshot)</span
      >.
      <em
        >A technical description of the math behind the demo is coming soon.</em
      >
    </p>
  </div>
  <div style="margin:2rem;">
    <PeopleDynamicsFromFolder configDir="/models/allpeople" />
  </div>
</div>

<style lang="scss">
  :global(.katex-html) {
    display: none;
  }

  .spread {
    p {
      line-height: 2rem;
    }
  }
</style>
