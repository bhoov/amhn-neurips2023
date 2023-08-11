<script>
  import HeroSection from "$lib/components/HeroSection.svelte";
  import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";
  import { onMount } from "svelte";
  import PersonCard from "$lib/components/PersonCard.svelte";
  import PeopleDynamicsFromFolder from "$lib/components/PeopleDynamicsFromFolder.svelte";

  export let data;

  onMount(() => {
    console.log(data);
  });
</script>

<!-- <AMNH_NavBar /> -->
<HeroSection />
<div class="contentWrap">
  <div class="content">
    <h2>Workshop</h2>
    <p>
      This workshop will discuss the latest multidisciplinary developments in
      Associative Memory and Hopfield Networks. A number of leading researchers
      in this research area from around the world have already agreed to attend
      and present their latest results. We anticipate sharing their
      presentations and outlining future research directions in this emerging
      field with the rest of the NeurIPS community.
    </p>

    <div id="participation" />
    <h2>Participation</h2>
    <p>
      Please see the <a href="/cfp" style="color:inherit;">Call for Papers</a>
      and
      <a href="/papers" style="color:inherit;">Related Work</a> pages.
    </p>

    <div id="speakers" />
    <h2>Invited Speakers</h2>
    <p>
      We are very pleased to welcome a group of amazing researchers in the field
      to discuss with.
    </p>

    <div class="card-container">
      {#each data.speakers as person}
        <PersonCard {person} />
      {/each}
    </div>

    <div id="panelists">
      <h2>Panelists</h2>
      <p>
        We end our workshop with a panel on the future of software engineering
        built around Associative Memories.
      </p>

      <div class="card-container">
        {#each data.panelists as person}
          <PersonCard {person} />
        {/each}
      </div>
    </div>

    <div id="organizers">
      <h2>Organizers</h2>
      <div class="card-container">
        {#each data.organizers as person}
          <PersonCard {person} />
        {/each}
      </div>
    </div>

    <div id="committee">
      <h2>Program Commitee</h2>
      <ul>
        {#each data.committee as person}
          <li>
            <a
              href={person.url || "#"}
              target="_blank"
              style="text-decoration:none; color:inherit;">{person.name}</a
            >
            ({person.affiliations.join(", ")})
          </li>
        {/each}
      </ul>
    </div>
  </div>
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
      network are the headshots of each person mentioned on this landing page.
      The animation below has two states:
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
    <PeopleDynamicsFromFolder configDir="models/allpeople" />
  </div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }

  h2 {
    margin: 2.5rem 0 1.5rem 0;
  }

  .aside {
    color: #888888;
  }
</style>
