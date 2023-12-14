<script>
  import SpeakerList from "./SpeakerList.svelte";
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
  <table class="w-full text-sm text-left text-gray-700">
    <thead class="text-xs text-gray-700 uppercase sched-bg break">
      <tr class="">
        <th scope="col" class="">Time</th>
        <th scope="col" class="">Event</th>
        <th scope="col" class="">Participants</th>
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <th scope="row" class="">08:15-08:25</th>
        <td class="">Opening Remarks</td>
        <td class="">
          <SpeakerList
            speakers={[{ name: "Mohammed Zaki", affiliation: "RPI" }]}
          />
        </td>
      </tr>
      <tr class="">
        <th scope="row" class="font-medium whitespace-nowrap dark:text-white"
          >08:25-08:40</th
        >
        <td class="">Introductory Words on Hopfield Networks</td>
        <td class="">
          <SpeakerList
            speakers={[
              { name: "John J. Hopfield", affiliation: "Princeton U" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >08:40-09:15</th
        >
        <td class=""
          >Trading off pattern number and richness: A new associative memory
          model based on pre-structured low-dimensional manifolds that saturates
          the information bound regardless of number of memories</td
        >
        <td class="">
          <SpeakerList speakers={[{ name: "Ila Fiete", affiliation: "MIT" }]} />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >09:15-09:50</th
        >
        <td class=""
          >Dense Associative Memory for Novel Transformer Architectures</td
        >
        <td class="">
          <SpeakerList
            speakers={[{ name: "Dmitry Krotov", affiliation: "MIT-IBM" }]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >09:50-10:00</th
        >
        <td class=""
          >Rapid Learning without Catastrophic Forgetting in the Morris Water
          Maze</td
        >
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Raymond Wang", affiliation: "MIT" },
              { name: "Jaedong Hwang", affiliation: "MIT" },
              { name: "Akhilan Boopathy", affiliation: "MIT" },
              { name: "Ila Fieta", affiliation: "MIT" },
            ]}
          />
        </td></tr
      >
      <tr class="break">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >10:00-10:30</th
        >
        <td class="">Coffee Break</td>
        <td class="" />
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >10:30-10:40</th
        >
        <td class=""
          >Sequential Learning and Retrieval in a Sparse Distributed Memory: The
          K-winner Modern Hopfield Network</td
        >
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Shaunak Bhandarkar", affiliation: "Stanford" },
              { name: "James McClelland", affiliation: "Stanford" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >10:40-10:50</th
        >
        <td class=""
          >In search of dispersed memories: Generative diffusion models are
          associative memory networks</td
        >
        <td class="">
          <SpeakerList
            speakers={[{ name: "Luca Ambrogioni", affiliation: "Radboud U" }]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >10:50-11:25</th
        >
        <td class="">Memory Architectures for Deep Learning</td>
        <td class="">
          <SpeakerList
            speakers={[{ name: "Sepp Hochreiter", affiliation: "JKU Linz" }]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >11:25-12:00</th
        >
        <td class="">The Exponential Capacity of Dense Associative Memories</td>
        <td class="">
          <SpeakerList
            speakers={[{ name: "Carlo Lucibello", affiliation: "Bocconi U" }]}
          />
        </td>
      </tr>
      <tr class="break">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >12:00-13:30</th
        >
        <td class="">Lunch Break</td>
        <td class="" />
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >13:30-14:05</th
        >
        <td class="">Transformers as Associative Memory Machines</td>
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Krzysztof Choromanski", affiliation: "Google" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >14:05-15:00</th
        >
        <td class=""
          ><div class="font-extrabold">Panel</div>
          <div class="font-light italic">
            Hopfield Networks meet Software Engineering
          </div></td
        >
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Blaise Aguera y Arcas", affiliation: "Google" },
              { name: "Olawale Onabola", affiliation: "RBI" },
              { name: "Bao Pham", affiliation: "RPI" },
              { name: "Benjamin Hoover", affiliation: "GA Tech" },
              { name: "Dmitry Krotov", affiliation: "IBM Research" },
              { name: "Sepp Hochreiter", affiliation: "U. of Linz" },
              { name: "Krzysztof Choromanski", affiliation: "DeepMind" },
              { name: "Hendrik Strobelt", affiliation: "MIT-IBM" },
            ]}
          />
        </td>
      </tr>
      <tr class="break">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >15:00-15:30</th
        >
        <td class="">Coffee Break</td>
        <td class="" />
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >15:30-15:40</th
        >
        <td class="">Hopfield Boosting for Out-of-Distribution Detection</td>
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Claus Hofmann", affiliation: "JKU Linz" },
              { name: "Simon Schmid", affiliation: "JKU Linz" },
              { name: "Bernhard Lehner", affiliation: "JKU Linz" },
              { name: "Daniel Klotz", affiliation: "JKU Linz" },
              { name: "Sepp Hochreiter", affiliation: "JKU Linz" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >15:40-15:50</th
        >
        <td class="">Long Sequence Hopfield Memory</td>
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Hamza Chaudhry", affiliation: "Harvard" },
              { name: "Jacob Zavatone-Veth", affiliation: "Harvard" },
              { name: "Dmitry Krotov", affiliation: "MIT-IBM" },
              { name: "Cengiz Pehlevan", affiliation: "Harvard" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >15:50-16:00</th
        >
        <td class=""
          >Associative Transformer is a Sparse Representation Learner</td
        >
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Yuwei Sun", affiliation: "UTokyo" },
              { name: "Hideya Ochiai", affiliation: "UTokyo" },
              { name: "Zhirong Wu" },
              { name: "Stephen Lin" },
              { name: "Ryota Kanai" },
            ]}
          />
        </td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >16:00-16:10</th
        >
        <td class=""
          >Retrieving k-Nearest Memories with Modern Hopfield Networks</td
        >
        <td class="">
          <SpeakerList
            speakers={[
              { name: "Alexander Davydov" },
              { name: "Sean Jaffe" },
              { name: "Ambuj K Singh" },
              { name: "Francesco Bullo" },
            ]}
          />
        </td>
      </tr>
      <tr class="break">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >16:10-17:25</th
        >
        <td class="">Poster Session (in-person)</td>
        <td class="" />
      </tr>
      <tr class="">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >17:25-17:30</th
        >
        <td class="">Closing Remarks</td>
        <td class="">
          <SpeakerList
            speakers={[{ name: "Parikshit Ram", affiliation: "IBM Research" }]}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style lang="scss">
  tbody > tr {
    @apply bg-gray-100 border-b;
  }

  tr > td {
    @apply px-3 py-2 md:px-6 md:py-4;
    max-width: 210px;
  }

  tr > th {
    @apply px-3 py-2 md:px-6 md:py-4 text-gray-900 whitespace-nowrap font-light;
    /* @apply px-6 py-4; */
  }

  thead * > th {
    @apply px-3 md:px-6 md:py-4 font-bold text-gray-500;
  }

  .affiliation {
    @apply text-gray-400 font-light;
  }

  .speaker-list {
    @apply flex flex-col gap-y-1 flex-wrap pl-3 -indent-3;
  }

  .break {
    @apply bg-gray-300 border-b;
  }

  .dark {
    tbody > tr {
      @apply border-b text-gray-200 border-gray-600;
      background-color: #232c33;
      // color: text-
    }

    tr > td {
      @apply px-3 py-2 md:px-6 md:py-4;
      max-width: 210px;
    }

    tr > th {
      @apply px-3 py-2 md:px-6 md:py-4 text-gray-100 whitespace-nowrap font-light;
      /* @apply px-6 py-4; */
    }

    thead * > th {
      @apply px-3 md:px-6 md:py-4 font-bold text-gray-400;
    }

    .affiliation {
      @apply text-gray-400 font-light;
    }

    .speaker-list {
      @apply flex flex-col gap-y-1 flex-wrap pl-3 -indent-3;
    }

    .break {
      @apply bg-gray-900 border-b;
    }
  }
</style>
