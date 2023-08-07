<script lang="ts">
  import type {Data} from "csl-json";

  let source: Data[];

  fetch('/bibjson/papers.json')
    .then(response => response.json())
    .then(t => source = t)

  let renderItems = []
  $:if (source) {
    renderItems = source.map(s => {
      const authors = s.author.map(a => `${a.given} ${a.family}`)
      const proceedings = s["container-title"]
      const publisher = s.publisher
      const year = s.issued?.["date-parts"][0][0]
      const title = s.title
      const page = s.page
      const volume = s.volume;
      const url = s.URL


      return {
        authors, title, year, publisher, proceedings, page, volume, url
      }
    }).sort((a, b) => b.year - a.year)
  }


</script>

<div style="display: flex; flex-direction: row; gap:1em; flex-wrap: wrap;">
    {#each renderItems as {
      authors, title, year, publisher, proceedings, page, volume, url
    }}
        <a class="portraitCard"
           class:inactive={!url}
           style="display: flex; flex-direction: column;gap:.1em; width:200px;"
           href={url?url:'#'}
        >
            <!--            <div style="font-weight: bold"> {year}</div>-->
            <div style="font-weight: bold"> {title} ({year})</div>
            <div style="font-size: small">{authors.join(", ")}</div>
            <div style="font-size: small; font-style: italic;">{proceedings}{volume ? `, vol ${volume}` : ''}{page ? `, pp ${page}` : ''}</div>
            <!--            <div style="display: flex; flex-direction: row; gap: .5em; flex-wrap: wrap;">-->
            <!--                {#each authors as author}-->
            <!--                    <div>{author}</div>-->
            <!--                {/each}-->
            <!--            </div>-->

        </a>

    {/each}
<!--    <pre>{JSON.stringify(source, null, 2)}</pre>-->
</div>

<style lang="scss">
  .portraitCard {
    color: inherit;
    text-decoration: none;
    padding: 10px;
    //background-color: black;
    border: 2px solid #9AD1D4;
    //background-color: #9AD1D4;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    cursor: pointer;
    width: 100px;

    &.inactive{
      border-color: #424245;
      pointer-events: none;
    }

    .portrait {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
      filter: grayscale(100%)
    }
  }

  .portraitCard:hover {
    background-color: #424245;
  }
</style>
