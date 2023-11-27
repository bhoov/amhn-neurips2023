<script>
  import NavBar from "./NavBar.svelte";

  let scroll = 0
  let wHeight;

  export let paralax = true
  const paralax_height = 45

  $:navBarTop = paralax ? -Math.min(scroll / (.7 * wHeight) * paralax_height, paralax_height) : -Math.min(scroll, paralax_height)

</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={wHeight}/>

<div style="position: fixed; left:0; right:0;z-index:10"
     style:top={navBarTop+'px'}>
    <NavBar logoName="AMHN" navItems={[
            // {label: "Call", href: "/cfp/"},
            {label: "Accepted Papers", href: "https://openreview.net/group?id=NeurIPS.cc/2023/Workshop/AMHN", newTab: true},
            // {label: "Related Papers", href: "/papers/"},
            {label: "Demo", href: "/demo"},
            {label: "Schedule", href: "https://neurips.cc/virtual/2023/workshop/66524", newTab: true},
            {label: "Contact", href: "/#contact"},
            // {label: "Speakers", href: "/#speakers"},
            // {label: "Panelists", href: "/#panelists"},
    ]}/>
</div>
