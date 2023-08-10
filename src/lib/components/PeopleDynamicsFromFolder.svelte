<script lang="ts">
  import PeopleDynamics from "$lib/components/PeopleDynamics.svelte";
  import { onMount } from "svelte";
  import { pathJoin } from "$lib/etc/pathJoin";

  export let configDir = "models/speakers";
  let config: any;

  onMount(() => {
    fetch(pathJoin([configDir, "/config.json"])).then((r) =>
      r.json().then((conf) => {
        config = conf;
      })
    );
  });
</script>

{#if config}
  <PeopleDynamics {configDir} {config} />
{/if}
