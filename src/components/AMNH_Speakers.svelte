<script lang="ts">
  let speakers = [
    {
      name: "John Hopfield",
      url: "https://pni.princeton.edu/john-hopfield",
      org: "Princeton University",
      img: "https://pni.princeton.edu/sites/default/files/styles/large/public/images/page/JohnHopfield_0.jpg"
    },
    {
      name: "Dmitry Krotov",
      url: "https://mitibmwatsonailab.mit.edu/people/dmitry-krotov/",
      org: "IBM Research",
      img: "https://mitibmwatsonailab.mit.edu/wp-content/uploads/2020/03/dmitry-krotov-1536x997.jpg"
    },
    {
      name: "Sepp Hochreiter",
      url: "https://www.jku.at/en/institute-for-machine-learning/about-us/team/sepp-hochreiter/",
      org: "JKU Linz",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sepp_Hochreiter.JPG/1920px-Sepp_Hochreiter.JPG"
    },

    {
      name: "Ila Fiete",
      url: "https://mcgovern.mit.edu/profile/ila-fiete/",
      org: "MIT McGovern",
      img: "https://mcgovern.mit.edu/wp-content/uploads/2020/07/MIT-Fiete-Ila-01_900x600.jpg"
    },
    {
      name: "Carlo Lucibello",
      url: "https://faculty.unibocconi.eu/carlolucibello/",
      org: "Univ Bocconi",
      img: "https://dep-people.unibocconi.eu/sites/default/files/media/images/Lucibello_LAST.jpg"
    },
    {
      name: "Krzysztof Choromanski",
      url: "https://research.google/people/KrzysztofChoromanski/",
      org: "Google Research",
      img: "https://www.engineering.columbia.edu/files/seas/styles/300x300/public/content/bio_profile_image/2021/07/krzysztof_choromanski_photo.jpg?itok=M7NOZprd"
    },
    {
      name: "Benjamin Hoover",
      url: "https://bhoov.com/",
      org: "Georgia Tech",
      img: "https://bhoov.com/imgs/people/me-headshot-230426.jpg"
    },
    {
      name: "Johannes Brandstetter",
      url: "https://www.jku.at/institut-fuer-machine-learning/ueber-uns/team/ass-prof-dr-johannes-brandstetter/",
      org: "JKU Linz",
      img: "https://www.jku.at/fileadmin/_processed_/0/e/csm_Brandstetter_e9eb6cfc75.jpg"
    },
  ]


</script>

<div style="display: flex; flex-direction: row; gap: 5px;flex-wrap: wrap; ">
    {#each speakers as {name, url, org, img}}
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
