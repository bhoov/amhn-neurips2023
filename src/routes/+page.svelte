<script>
  import NavBar from "../lib/components/NavBar.svelte";
  import HeroSection from "../lib/components/HeroSection.svelte";
  import AMNH_NavBar from "../lib/components/AMNH_NavBar.svelte";
  import AMNH_Organizers from "../lib/components/AMNH_Organizers.svelte";
  import SvelteMarkdown from "svelte-markdown";
  import AMNH_Speakers from "../lib/components/AMNH_Speakers.svelte";
  import AMNH_Panelists from "../lib/components/AMNH_Panelists.svelte";
  import {onMount} from "svelte"

  let sourcePC = ``

  export let data;

  fetch('../mds/pc.md')
    .then(response => response.text())
    .then(t => sourcePC = t)

  onMount(() => {
    console.log(data)
  })

</script>

<AMNH_NavBar/>
<HeroSection/>

<div class="contentWrap">
    <div class="content">
        <h3>Workshop</h3>
        <p>This workshop will discuss the latest multidisciplinary developments
            in Associative Memory and Hopfield Networks. A number of leading
            researchers in this research area from around the world have already
            agreed to attend and present their latest results. We anticipate
            sharing their presentations and outlining future research directions
            in this emerging field with the rest of the NeurIPS community.</p>





        <div id="speakers"></div>
        <h3>Invited Speakers</h3>
        <p> We are very pleased to welcome a group of amazing researchers in the field
            to discuss with. </p>
        <AMNH_Speakers/>

        <div id="panelists">
        <h3>Panelists</h3>
        <p> We end our workshop with a panel on the future of software engineering built around Associative Memories. </p>

        <AMNH_Panelists/>
        </div>

        <div id="organizers"></div>
        <h3> Organizers</h3>
        <AMNH_Organizers/>


        <h3> Program Commitee</h3>
        <p>
            <SvelteMarkdown source="{sourcePC}"/>
        </p>


        <p style="min-height: 500px;"></p>

    </div>
</div>

