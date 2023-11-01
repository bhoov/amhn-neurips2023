<div class="hero-image">
  <div
    style="height: 50px; overflow: hidden;position:absolute;top: calc(100% - 50px); right: 0; left:0"
  >
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%;"
    >
      <path
        d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #232C33;"
      />
    </svg>
  </div>
  <div class="hero-text">
    <h1>AMHN Workshop @NeurIPS 2023</h1>
    <h3>Associative Memory & Hopfield Networks</h3>
    <div class="text-2xl my-4 font-bold">December 15, 2023 08:15-17:30 CT </div>
    <div class="font-light ml-4 text-xl">Room 223</div>
  </div>
</div>

<style lang="scss">
  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/img/dalle_synapses.jpg");
    height: 700px;
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
    width: 100%;
    max-width: 786px;
    padding: 1rem 2rem;
    transform: translate(-50%, -50%);
    color: inherit;
    h1 {
      font-size: 80px;
    }

    h3 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero-image {
      height: 700px;
    }

    .hero-text {
      h1 {
        font-size: 50px;
      }

      h3 {
        font-size: 22px;
      }
    }
  }
</style>
