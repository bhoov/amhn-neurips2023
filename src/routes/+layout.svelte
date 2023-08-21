<script lang="ts">
    import HeroSection from "$lib/components/HeroSection.svelte";
    import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";
    import "./global.scss";
</script>

<svelte:head>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://amhn.vizhub.ai" />
    <meta name="twitter:title" content="AMHN Workshop @NeurIPS 2023" />
    <meta
        name="twitter:description"
        content="Associative Memory &amp; Hopfield Network Worshop @NeurIPS 2023. Discuss the latest multidisciplinary developments in Associative Memory and Hopfield Networks. Imagine new tools built around memory as computation."
    />
    <meta
        name="twitter:image"
        content="/img/amhn_card_preview.jpg"
    />
</svelte:head>

<AMNH_NavBar />
<slot />

<div class="contentWrap">
    <footer class="content-wide my-8">
        <hr class="bg-gray-800" />
        <p class="text-sm text-gray-400 my-8 px-6" style="text-align: center;">
            Website and <a href="/demo">demo</a> built by
            <a href="http://hendrik.strobelt.com/" target="_blank"
                >Hendrik Strobelt</a
            >
            (IBM Research, MIT-IBM) and
            <a href="https://bhoov.com/" target="_blank">Benjamin Hoover</a> (IBM
            Research, GA Tech).
        </p>
        <hr class="bg-gray-800" />
    </footer>
</div>
