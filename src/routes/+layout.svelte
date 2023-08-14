<script lang="ts">
    import HeroSection from "$lib/components/HeroSection.svelte";
    import AMNH_NavBar from "$lib/components/AMNH_NavBar.svelte";
    import "./global.scss";
</script>

<AMNH_NavBar />
<slot />

<div class="contentWrap">
    <footer class="content-wide my-8">
        <hr class="bg-gray-800" />
        <p class="text-sm text-gray-400 my-8 px-6" style="text-align: center;">
            Website and <a href="/demo">demo</a> built by <a
                href="http://hendrik.strobelt.com/"
                target="_blank">Hendrik Strobelt</a
            >
            (IBM Research, MIT-IBM) and
            <a href="https://bhoov.com/" target="_blank">Benjamin Hoover</a> (IBM
            Research, GA Tech).
        </p>
        <hr class="bg-gray-800" />
    </footer>
</div>
