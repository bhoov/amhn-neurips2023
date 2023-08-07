<script lang="ts">
  import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";

  import SvelteMarkdown from "svelte-markdown";

  export let data

  let source = data.call_for_papers;
</script>

<div>
  <AMNH_NavBar paralax={false} />

  <div class="contentWrap">
    <div class="cfp content">
      <h1>Call for Papers</h1>
      <SvelteMarkdown {source} />
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
