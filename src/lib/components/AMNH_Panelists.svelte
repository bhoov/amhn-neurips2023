<script lang="ts">
  let panelists = [
    {
      name: "Benjamin Hoover",
      url: "https://bhoov.com/",
      org: "Georgia Tech",
      img: "https://bhoov.com/imgs/people/me-headshot-230426.jpg",
    },
    {
      name: "Bao Pham",
      url: "",
      org: "RPI",
      img: "//:0",
    },
    {
      name: "Olawale Onaboloa",
      url: "https://mila.quebec/en/person/olawaleonabola/",
      org: "Mila",
      img: "https://mila.quebec/wp-content/uploads/2021/06/1607289477842-509x608.jpeg",
    },
  ];
</script>

<div style="display: flex; flex-direction: row; gap: 5px;flex-wrap: wrap; ">
    {#each panelists as {name, url, org, img}}
        <a href="{url}" class="portraitCard">
            <img src={img} alt={name} class="portrait">
            <div style="width: 100%; display: flex; flex-direction: column; align-items: start;margin-top: .5em;">

                <div style="text-align: center;">{name}</div>
                <div style="font-size: x-small;">{org}</div>
            </div>
        </a>
    {/each}
</div>

<style lang="scss">
  .portraitCard {
    color: inherit;
    text-decoration: none;
    padding: 10px;
    //background-color: black;
    border: 2px solid #9AD1D4;
    //background-color: #9AD1D4;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 200px;

    .portrait {
      max-width: 150px;
      max-height: 150px;
      border-radius: 50%;
      filter: grayscale(100%)
    }
  }

  .portraitCard:hover {
    background-color: #424245;

    .portrait {
      filter: grayscale(0);
    }
  }


</style>
