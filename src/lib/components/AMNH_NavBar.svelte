<script>
  import NavBar from "./NavBar.svelte";

  let scroll = 0
  let wHeight;

  export let paralax = true

  $:navBarTop = paralax ? -Math.min(scroll / (.7 * wHeight) * 30, 30) : -Math.min(scroll, 30)

</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={wHeight}/>

<div style="position: fixed; left:0; right:0;z-index:10"
     style:top={navBarTop+'px'}>
    <NavBar logoName="AMHN" navItems={[
            {label: "Call", href: "/cfp/"},
            {label: "Related Papers", href: "/papers/"},
            {label: "Demo", href: "/demo"},
            {label: "Contact", href: "/#contact"},
            // {label: "Speakers", href: "/#speakers"},
            // {label: "Panelists", href: "/#panelists"},
    ]}/>
</div>
