<script lang="ts">
  interface Speaker {
    name: string;
    affiliation?: string;
  }
  export let speakers: Speaker[];

</script>

<div class="speaker-list">
  {#each speakers as speaker}
  <span class="speaker"
    >{speaker.name} {#if speaker.affiliation}<span class="affiliation">(UTokyo)</span>{/if}</span
  >
  {/each}
</div>

<style lang="scss">

  .affiliation {
    @apply hidden text-gray-400 font-light;
  }

  .speaker-list {
    @apply flex flex-col gap-y-1 flex-wrap pl-3 -indent-3;
  }

</style>
