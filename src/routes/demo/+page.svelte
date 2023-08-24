<script lang="ts">
  import PeopleDynamicsFromFolder from "$lib/components/PeopleDynamicsFromFolder.svelte";
  import Katex from "svelte-katex";
  import { math, display, align, alignStar } from "mathlifier"; // `math` for inline, `display` for block
</script>

<div class="contentWrap">
  <div class="content">
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
        >See <a href="#demo-anatomy">below</a> for a more technical description of
        the demo.</em
      >
    </p>
  </div>
  <div style="margin:2rem;">
    <PeopleDynamicsFromFolder configDir="/models/allpeople" />
  </div>

  <div class="content">
    <div class="spread">
      <h2 id="demo-anatomy">The Anatomy of our Hopfield Network</h2>

      <blockquote>
        An <em>Associative Memory</em> is a dynamical system that is concerned with
        the memorization and retrieval of data.
      </blockquote>

      <p>
        The structure of our data in the demo above is a collection <code
          >(image, label)</code
        >
        pairs, where each <em>image variable</em>
        {@html math(String.raw`x \in \mathbb{R}^{3N_\mathrm{pixels}}`)} is represented
        as a rasterized vector of the RGB pixels and each
        <em>label variable</em>
        {@html math(String.raw`y \in \mathbb{R}^{N_\mathrm{people}}`)} identifies
        a person and is represented as a one-hot vector. Our Associative Memory additionally
        introduces a third, hidden variable for the
        <em>memories</em>
        {@html math(String.raw`z \in \mathbb{R}^{N_\mathrm{memories}}`)}.
        <!-- These three variables are connected to each other via
          <em>synapses</em> <span class="aside">(relationships)</span> -->
      </p>

      <p>
        In Associative Memories, each of these variables has both a
        <em>internal state</em>
        that evolves in time and an <em>axonal state</em>
        <span class="aside">(an isomorphic function of the internal state)</span
        >
        that influences how the rest of the network evolves. This terminology of
        internal/axonal is inspired by biology, where the "internal" state is analogous
        to the internal current of a neuron and the "axonal" state is analagous to
        a neuron's <em>firing rate</em>
        <span class="aside">(a neuron's axonal output)</span>. We denote the
        internal state of a variable with a hat: (i.e., variable {@html math(
          String.raw`x`
        )} has internal state {@html math(String.raw`\hat{x}`)}, {@html math(
          String.raw`y`
        )} has internal state {@html math(String.raw`\hat{y}`)}, and {@html math(
          String.raw`z`
        )} has internal state {@html math(String.raw`\hat{z}`)}).
      </p>

      <blockquote>
        Dynamic variables in Associative Memories have two states: an internal
        state and an axonal state.
      </blockquote>

      <p>
        We call the axonal state the <em>activations</em> and they are uniquely defined
        by our choice of a scalar and convex Lagrangian function on that variable <span class="aside">(see <a href="https://arxiv.org/abs/2107.06446">Krotov (2021)</a>, <a href="https://arxiv.org/abs/2008.06996">Krotov & Hopfield (2021)</a>, and <a href="https://bhoov.com/hamux/">Hoover et al. (2022)</a> for more details)</span>.
        Specifically, in this demo we choose
      </p>

      <p>
        {@html alignStar(
          String.raw`L_x(\hat{x}) \triangleq& \frac{1}{2} \sum\limits_i \hat{x}_i^2\\
            L_y(\hat{y}) \triangleq& \log \sum\limits_k \exp (\hat{y}_k)\\
            L_z(\hat{z}) \triangleq& \frac{1}{\beta} \log \sum\limits_\mu \exp(\beta \hat{z}_\mu)`
        )}
      </p>

      <p>
        These Lagrangians dictate the axonal states <span class="aside"
          >(activations)</span
        >
        of each variable.
      </p>

      <p>
        {@html alignStar(String.raw`
            x &= \nabla_{\hat{x}} L_x  = \hat{x}\\
            y &= \nabla_{\hat{y}} L_y = \mathrm{softmax}(\hat{y})\\
            z &= \nabla_{\hat{z}} L_z = \mathrm{softmax}(\beta \hat{z})
            `)}
      </p>

      <p>
        The <a href="https://en.wikipedia.org/wiki/Legendre_transformation"
          >Legendre transform</a
        > of the Lagrangian defines the energy of each variable.
      </p>

      <p>
        {@html alignStar(String.raw`
            E_x &= \sum\limits_i \hat{x}_i x_i - L_x\\
            E_y &= \sum\limits_k \hat{y}_k y_k - L_y\\
            E_z &= \sum\limits_\mu \hat{z}_\mu z_\mu - L_z\\
            `)}
      </p>

      <blockquote>
        All variables in Associative Memories have a special Lagrangian function
        that defines the axonal state and the energy of that variable.
      </blockquote>

      <p>
        Here, {@html math(String.raw`\beta > 0`)} is an inverse temperature that
        controls the "spikiness" of the energy function around each memory
        <span class="aside"
          >(the spikier the energy landscape, the more memories can be stored)</span
        >. Each of these three variables is dynamic
        <span class="aside">(evolves in time)</span>.
        <em
          >The convexity of the Lagrangians ensures that the dynamics of our
          network will converge to a fixed point.</em
        >
      </p>

      <p>
        How each variable evolves is dictated by that variable's contribution to
        the <em>global energy function</em>
        {@html math(String.raw`E_\theta(x,y,z)`)}
        <span class="aside"
          >(parameterized by weights {@html math(String.raw`\theta`)})</span
        >
        that is LOW when the image
        {@html math(String.raw`x`)}, the label {@html math(String.raw`y`)}, and
        the memories {@html math(String.raw`z`)} are aligned
        <span class="aside">(look like real data)</span>
        and HIGH everywhere else
        <span class="aside"
          >(so that our energy function places real data at local energy minima)</span
        >. In this demo we choose an energy function that allows us to manually
        insert <em>memories</em>
        <span class="aside"
          >(the <code>(image,label)</code> pairs we want to show)
        </span>
        into the weights {@html math(
          String.raw`\theta = \left\{\theta^\mathrm{image} \in \mathbb{R}^{N_\mathrm{memories} \times 3N_\mathrm{pixels}},\;\; \theta^\mathrm{label} \in \mathbb{R}^{N_\mathrm{memories} \times N_\mathrm{people}}\right\}`
        )}. As before, let {@html math(
          String.raw`\mu = \left\{1,\ldots,N_\mathrm{memories} \right\}`
        )},
        {@html math(
          String.raw`i = \left\{ 1,\ldots,3N_\mathrm{pixels} \right\}`
        )} and {@html math(
          String.raw`k = \left\{1,\ldots,N_\mathrm{people} \right\}`
        )}. The global energy function in this demo is
      </p>

      <p>
        {@html align(
          String.raw`E_\theta(x, y, z) &= E_x + E_y + E_z + \frac{1}{2} \left[ \sum\limits_\mu z_\mu (\sum\limits_i \theta^\mathrm{image}_{\mu i} - x_i)^2 - \frac{1}{2} \sum\limits_i x_i^2\right] - \lambda \sum\limits_{\mu} \sum\limits_k z_\mu \theta^\mathrm{label}_{\mu k} y_k\\
            &= E_x + E_y + E_z + E_{xz} + E_{yz}
            `
        )}
      </p>

      <p>
        We introduce {@html math(String.raw`\lambda > 1`)} to encourage the dynamics
        to align with the label.
      </p>

      <blockquote>
        Associative Memories can always be visualized as an undirected graph.
      </blockquote>

      <p>
        Every associative memory can be understood as an undirected graph where <em
          >nodes</em
        >
        represent dynamic variables and <em>edges</em> capture the
        <span class="aside">(often learnable)</span> alignment between dynamic
        variables. Notice that there are five energy terms in this global energy
        function: one for each node
        <span class="aside"
          >({@html math(String.raw`E_x`)}, {@html math(String.raw`E_y`)}, {@html math(
            String.raw`E_z`
          )})</span
        >, and one for each edge
        <span class="aside"
          >({@html math(String.raw`E_{xz}`)} captures the alignment between memories
          and our image and {@html math(String.raw`E_{yz}`)} captures the alignment
          between memories and our label)</span
        >. See the diagram below for the anatomy of this network.
      </p>

      <img src="/img/DemoAnatomy.jpeg" alt="Graph depcition of our Demo" />

      <div class="archive">
        <p>
          In fact, every associative memory can be understood as an undirected
          graph where <em>nodes</em>
          represent dynamic variables and <em>edges</em> capture the
          <span class="aside">(often learnable)</span> alignment between dynamic
          variables. In our energy function, we have three nodes and two edges:
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
            the memories
          </li>

          <li>
            <strong>Edge {@html math(String.raw`(x,z)`)}</strong> capturing the alignment
            of the presented image to our memories
          </li>

          <li>
            <strong>Edge {@html math(String.raw`(y,z)`)}</strong> capturing the alignment
            of the presented label to our memories
          </li>
        </ul>
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
      </div>

      <p>
        This global energy function {@html math(String.raw`E_\theta(x,y,z)`)} turns
        our images, labels, and memories into dynamic variables whose internal states
        evolve according to the following differential equations:
      </p>

      <p>
        {@html alignStar(String.raw`
          \tau_x \frac{d\hat{x}_i}{dt} &= -\frac{\partial E_\theta}{\partial x_i} = \sum\limits_\mu z_\mu \left( \theta^\mathrm{image}_{\mu i} - x_i \right)\\
          \tau_y \frac{d\hat{y}_k}{dt} &= -\frac{\partial E_\theta}{\partial y_k} = \lambda \sum\limits_\mu z_\mu \theta^\mathrm{label}_{\mu k} - \hat{y}_k\\
          \tau_z \frac{d\hat{z}_\mu}{dt} &= -\frac{\partial E_\theta}{\partial z_\mu} = - \frac{1}{2}  \sum\limits_i \left(\theta^\mathrm{image}_{\mu i} - x_i \right)^2  + \lambda \sum\limits_k \theta^\mathrm{label}_{\mu k} y_k - \hat{z}_\mu\\
          `)}
      </p>

      <p>
        where {@html math(String.raw`\tau_x, \tau_y, \tau_z`)} define how quickly
        the states evolve.
      </p>
      <blockquote>
        The variables in Associative Memories always seek to minimize their
        contribution to a global energy function.
      </blockquote>
      <p>
        Note that in the demo we treat our network as an
        <em>image generator</em>
        by clamping the labels
        <span class="aside"
          >(forcing {@html math(String.raw`\frac{d\hat{y}}{dt} = 0`)})</span
        >. We could similarly use the same Associative Memory as a
        <em>classifier</em>
        by clamping the image
        <span class="aside"
          >(forcing {@html math(String.raw`\frac{d\hat{x}}{dt} = 0`)})</span
        > and allowing only the label to evolve.
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  :global(.katex-html) {
    display: none;
  }

  :global(mtd) {
    text-align: left;
  }

  .spread {
    p {
      line-height: 2rem;
    }
  }

  .archive {
    display: none;
  }

  blockquote {
    // padding-left: 2rem;
    padding: 0.5rem 0rem 0.5rem 2rem;
    border-left: solid 4px white;
    // color: gray;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6rem;
    font-style: italic;
  }
</style>
