<script lang="ts">
  let organizers = [
    {
      name: "Hilde Kuehne",
      url: "https://hildekuehne.github.io/",
      org: "University of Bonn",
      img: "https://hessian.ai/wp-content/uploads/2022/11/Hilde-Kuhne-e1668779576551.jpg"
    },
    {
      name: "Daniel D. Lee",
      url: "https://www.ece.cornell.edu/faculty-directory/daniel-dongyuel-lee",
      org: "Cornell University",
      img: "https://www.ece.cornell.edu/sites/default/files/departments/ECE/Daniel-Lee-560.jpg"
    },
    {
      name: "Cengiz Pehlevan",
      url: "https://pehlevan.seas.harvard.edu/people/cengiz-pehlevan",
      org: "Harvard University",
      img: "https://pehlevan.seas.harvard.edu/sites/projects.iq.harvard.edu/files/styles/profile_full/public/pehlevan/files/cengiz_edited_small.jpg"
    },
    {
      name: "Parikshit Ram",
      url: "https://rithram.github.io",
      org: "IBM Research",
      img: "https://avatars.githubusercontent.com/u/5964219?v=4"
    },
    {
      name: "Mohammed J. Zaki",
      url: "http://www.cs.rpi.edu/~zaki/",
      org: "RPI",
      img: "http://www.cs.rpi.edu/~zaki/images/zaki_pic.png"
    },
    {
      name: "Lenka Zdeborova",
      url: "https://www.epfl.ch/labs/spoc/prof-lenka-zdeborova/",
      org: "EPFL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/EPFL_2020_Lenka_Zdeborov%C3%A1_Portrait.jpg/440px-EPFL_2020_Lenka_Zdeborov%C3%A1_Portrait.jpg"
    },
  ]


</script>

<div style="display: flex; flex-direction: row; gap: 5px;flex-wrap: wrap; ">
    {#each organizers as {name, url, org, img}}
        <a href="{url}" class="portraitCard">
            <img src={img} alt={name} class="portrait">
            <div style="text-align: center;">{name}</div>
            <div style="font-size: x-small;">{org}</div>
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
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 100px;

    .portrait {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
      filter: grayscale(100%)
    }
  }

  .portraitCard:hover {
    background-color: #424245;

    .portrait {
      filter:grayscale(0);
    }
  }


</style>
