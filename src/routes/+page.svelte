<script>
  import HeroSection from "$lib/components/HeroSection.svelte";
  import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";
  import { onMount } from "svelte";
  import PersonCard from "$lib/components/PersonCard.svelte";

  export let data;

  onMount(() => {
    console.log(data);
  });
</script>

<AMNH_NavBar />
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
      Please see the <a href="/cfp" style="color:inherit;">Call for Papers</a> and
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

    <p style="min-height: 500px;" />
  </div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
  }

  h2 {
    margin: 2.5rem 0 1.5rem 0;
  }
</style>
