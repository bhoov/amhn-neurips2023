<script lang="ts">


</script>

<div class="hero-image">

    <!--    <div style="height: 150px; overflow: hidden;">-->
    <!--        <svg viewBox="0 0 500 150" preserveAspectRatio="none"-->
    <!--             style="height: 100%; width: 100%;">-->
    <!--            <path d="M0.00,49.98 C191.03,88.32 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"-->
    <!--                  style="stroke: none; fill: #08f;"></path>-->
    <!--        </svg>-->
    <!--    </div>-->
    <!--    <div style="height: 150px; overflow: hidden;position:absolute;top: 200px; right: 0; left:0">-->
    <!--        <svg viewBox="0 0 500 150" preserveAspectRatio="none"-->
    <!--             style="height: 100%; width: 100%;">-->
    <!--            <path d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.27,102.13 L0.27,103.12 Z"-->
    <!--                  style="stroke: none; fill:#232C33;"></path>-->
    <!--        </svg>-->
    <!--    </div>-->
    <div style="height: 50px; overflow: hidden;position:absolute;top: calc(100% - 50px); right: 0; left:0">

        <svg viewBox="0 0 500 150" preserveAspectRatio="none"
             style="height: 100%; width: 100%;">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style="stroke: none; fill: #232C33;"></path>
        </svg>
    </div>
    <div class="hero-text">
        <h1 style="font-size:50px">AMHN Workshop @NeurIPS 2023</h1>
        <h3>Associative Memory & Hopfield Networks</h3>
        <!--        <button>Hire me</button>-->
    </div>

</div>

<style lang="scss">
  .hero-image {
    //rgba(0, 0, 0, 0.5)
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/dalle_synapses.jpg");
    //background-image: url("https://www.w3schools.com/w3images/photographer.jpg");
    height: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: inherit;
  }
</style>
