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
        <td class="">M. J. Zaki <span class="affiliation">(RPI)</span></td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium whitespace-nowrap dark:text-white"
          >08:25-08:45</th
        >
        <td class="">Introductory Words on HN</td>
        <td class=""
          >J. Hopfield <span class="affiliation">(Princeton U)</span></td
        >
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >08:45-09:20</th
        >
        <td class="">Invited Talk</td>
        <td class="">I. Fiete <span class="affiliation">(MIT)</span></td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >09:20-09:55</th
        >
        <td class="">Invited Talk</td>
        <td class="">D. Krotov <span class="affiliation">(MIT-IBM)</span></td>
      </tr>
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
          >10:30-10:45</th
        >
        <td class="">Contributed Talk #1</td>
        <td class="">--</td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >10:45-11:20</th
        >
        <td class="">Invited Talk</td>
        <td class=""
          >S. Hochreiter <span class="affiliation">(JKU Linz)</span></td
        >
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >11:20-11:55</th
        >
        <td class="">Invited Talk</td>
        <td class=""
          >C. Lucibello <span class="affiliation">(Bocconi U)</span></td
        >
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
        <td class="">Invited Talk</td>
        <td class=""
          >K. Choromanski <span class="affiliation">(Google)</span></td
        >
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >14:05-15:00</th
        >
        <td class=""><div class="font-extrabold">Panel</div><div class="font-light italic">Hopfield Networks meet Software Engineering</div></td>
        <td class="">
          <div class="panelists">
            <span class="panelist"
              >B. Aguera y Arcas <span class="affiliation">(Google)</span></span
            >
            <span class="panelist"
              >B. Hoover <span class="affiliation">(GA Tech)</span></span
            >
            <span class="panelist"
              >O. Onabola <span class="affiliation">(RBI)</span></span
            >
            <span class="panelist"
              >B. Pham <span class="affiliation">(RPI)</span></span
            >
            <span class="text-gray-400 font-light">(More to come...)</span>
            <span class="panelist"
              >Moderated by H. Strobelt <span class="affiliation"
                >(MIT-IBM)</span
              ></span
            >
          </div>
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
          >15:30-15:45</th
        >
        <td class="">Contributed Talk #2</td>
        <td class="">--</td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class="font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >15:45-16:00</th
        >
        <td class="">Contributed Talk #3</td>
        <td class="">--</td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >16:00-16:15</th
        >
        <td class="">Contributed Talk #4</td>
        <td class="">--</td>
      </tr>
      <tr class="">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >16:15-17:25</th
        >
        <td class="">Poster Session</td>
        <td class="" />
      </tr>
      <tr class="">
        <th
          scope="row"
          class=" font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >17:25-17:30</th
        >
        <td class="">Closing Remarks</td>
        <td class="">P. Ram <span class="affiliation">(IBM Research)</span></td>
      </tr>
    </tbody>
  </table>
</div>

<!-- 
  header less bold, data content more bold
  Color by Section
  Collect styles in table
  "TBD" instead of "--"
  Hover to change color
  Less vertical padding
  Prettify list of panelists

 -->

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

  .panelists {
    @apply flex flex-col gap-y-1 flex-wrap pl-3 -indent-3;
  }

  .break {
    @apply bg-gray-300 border-b;
  }


  .dark {
    tbody > tr {
      @apply border-b text-gray-200 border-gray-600;
      background-color: #232C33;
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

    .panelists {
      @apply flex flex-col gap-y-1 flex-wrap pl-3 -indent-3;
    }

    .break {
      @apply bg-gray-900 border-b;
    }
  }
</style>
