<script lang="ts">
  import AMNH_NavBar from "../../components/AMNH_NavBar.svelte";

  export let data;

  $: papers = data.related_papers;

  let renderItems: any[];
  $: if (papers) {
    renderItems = papers
      .map((s) => {
        const authors = s.author.map((a) => `${a.given} ${a.family}`);
        const proceedings = s["container-title"];
        const publisher = s.publisher;
        const year = s.issued?.["date-parts"][0][0];
        const title = s.title;
        const page = s.page;
        const volume = s.volume;
        const url = s.URL;

        const venueProceeding = [proceedings, volume ? `, vol ${volume}` : "", page ? `, pp ${page}` : ""].join("")
        const venue = proceedings ? venueProceeding : publisher ? publisher : s.journal
        console.log("VENUE: ", venue)

        return {
          authors,
          title,
          year,
          publisher,
          proceedings,
          page,
          volume,
          url,
          venue
        };
      })
      // .sort((a, b) => b.year - a.year);
  }

</script>

<AMNH_NavBar paralax={false} />

<div class="contentWrap">
  <div class="content">
    <h1 style="margin:1.5em 0;">Related Papers</h1>
    <div style="display: flex; flex-direction: row; gap:1em; flex-wrap: wrap;">
      {#each renderItems as { authors, title, year, proceedings, page, volume, url, venue }}
        <a
          class="portraitCard"
          class:inactive={!url}
          target="_blank"
          style="display: flex; flex-direction: column;gap:.1em; width:200px;"
          href={url ? url : "#"}
        >
          <div style="font-weight: bold">{title} ({year})</div>
          <div style="font-size: small; margin: 0.2rem 0;">{authors.join(", ")}</div>
          <div style="font-size: small; font-style: italic; color: gray">
            {venue}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .portraitCard {
    color: inherit;
    text-decoration: none;
    padding: 10px;
    //background-color: black;
    border: 2px solid #9ad1d4;
    //background-color: #9AD1D4;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    cursor: pointer;
    width: 100px;

    &.inactive {
      border-color: #424245;
      pointer-events: none;
    }

    .portrait {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
      filter: grayscale(100%);
    }
  }

  .portraitCard:hover {
    background-color: #424245;
  }
</style>
