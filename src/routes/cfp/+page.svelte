<script lang="ts">


  import AMNH_NavBar from "../../components/AMNH_NavBar.svelte";

  import SvelteMarkdown from 'svelte-markdown'

  let source = ``

  fetch('../mds/cfp.md')
    .then(response => response.text())
    .then(t => source = t)


</script>

<div>
    <AMNH_NavBar paralax={false}/>

    <div class="contentWrap">
        <div class="cfp content">
            <h1>Call for Paper</h1>
            <SvelteMarkdown {source}/>

        </div>

    </div>
</div>

<style lang="scss">

  .cfp {

    :global(a) {
      color: inherit;
    }
  }


</style>
