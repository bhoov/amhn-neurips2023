<script lang="ts">
  import PeopleDynamicsFromFolder from "$lib/components/PeopleDynamicsFromFolder.svelte";
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
      In the exploratory spirit of this workshop, we have built an Hopfield
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
        >A more technical description of the math behind the demo coming soon.</em
      >
    </p>
  </div>
  <div class="content-wide" />
  <div style="margin:2rem;">
    <PeopleDynamicsFromFolder configDir="/models/allpeople" />
  </div>
</div>
