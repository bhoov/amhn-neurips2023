<script lang="ts">
  import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";
  import * as Cite from "citation-js";
  import { onMount } from "svelte";

  export let data;

  let papers;
  let renderItems: any[] = [];

  onMount(async () => {
    papers = await Cite.async(data.related_papers, {
      generateGraph: false,
    }).then((r) => r.format("data", { type: "object" }));

    renderItems = papers.map((s) => {
      const authors = s.author.map((a) => `${a.given} ${a.family}`);
      const proceedings = s["container-title"];
      const publisher = s.publisher;
      const year = s.issued?.["date-parts"][0][0];
      const title = s.title;
      const page = s.page;
      const volume = s.volume;
      const url = s.URL;

      const venueProceeding = [
        proceedings,
        volume ? `, vol ${volume}` : "",
        page ? `, pp ${page}` : "",
      ].join("");
      const venue = proceedings
        ? venueProceeding
        : publisher
        ? publisher
        : s.journal;
      console.log("VENUE: ", venue);

      return {
        authors,
        title,
        year,
        publisher,
        proceedings,
        page,
        volume,
        url,
        venue,
      };
    });
  });
</script>

<AMNH_NavBar paralax={false} />

<div class="contentWrap">
  <div class="content">
    <h1 style="margin:1.5em 0;">Related Papers</h1>
    <div class="flex-container">
      {#each renderItems as { authors, title, year, proceedings, page, volume, url, venue }}
        <a
          class="portraitCard"
          class:inactive={!url}
          target="_blank"
          style="display: flex; flex-direction: column;gap:.1em;"
          href={url ? url : "#"}
        >
          <div style="font-weight: bold">{title} ({year})</div>
          <div style="font-size: small; margin: 0.2rem 0;">
            {authors.join(", ")}
          </div>
          <div style="font-size: small; font-style: italic; color: gray">
            {venue}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  html,
  body {
    min-width: 100%;
  }
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
    align-items: stretch;
    cursor: pointer;
    width: 200px;

    &.inactive {
      border-color: #424245;
      pointer-events: none;
    }

    .portrait {
      max-height: 100px;
      border-radius: 50%;
      filter: grayscale(100%);
    }
  }

  .portraitCard:hover {
    background-color: #424245;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    gap: 1em;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 767px) {
    .flex-container {
      display: flex;
      flex-direction: row;
      gap: 1em;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    .portraitCard {
      width: 100%;
    }
  }
</style>
