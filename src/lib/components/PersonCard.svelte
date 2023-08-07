<script lang="ts">
  import {pathJoin} from "$lib/etc/pathJoin"

  interface Person {
    name: string
    affiliations: string[]
    url?: string
    headshot?: string
    blurb?: string
    email?: string
  }

  export let person: Person
  export let baseHeadshotDir = "/img/headshots/256x340"

  $: img = person.headshot ? pathJoin([baseHeadshotDir, person.headshot]) : ""
  $: url = person.url || "#"
  $: affiliation = person.affiliations.join(`<span class="word-sep">&#x2022;</span>`)
</script>

<a href={url} class="portraitCard" target="_blank">

    <img src={img} alt={person.name} class="portrait">
    <div style="width: 100%; display: flex; flex-direction: column; align-items: start;margin-top: .5em;">

        <div style="text-align: center;">{person.name}</div>
        <div style="font-size: small;margin-top:0.2rem;color:gray">{@html affiliation}</div>
    </div>
</a>

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
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 200px;

    .portrait {
      max-width: 150px;
      max-height: 150px;
      border-radius: 50%;
      filter: grayscale(100%)
    }
  }

  .portraitCard:hover {
    background-color: #424245;

    .portrait {
      filter: grayscale(0);
    }
  }

  :global(.word-sep) {
    margin: 0 0.3rem;
  }


</style>
