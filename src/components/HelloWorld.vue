<template>
  <div class="bg-[#85C9C8] min-h-screen w-full p-3 md:p-5 font-custom">
    <nav class="max-w-screen-lg flex flex-nowrap items-center mx-auto md:pt-5">
      <a href="https://flowbite.com/" class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
          <path
            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
        <span class="text-xl flex items-end whitespace-nowrap dark:text-teal-50">WithWeather</span>
      </a>
      <div class="flex justify-end md:order-1 w-full">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
          class="md:hidden text-teal-500 dark:text-teal-50 hover:bg-teal-100 duration-200 dark:hover:bg-teal-700 dark:hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-700 rounded-lg text-sm p-2.5 mr-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block w-full mx-10 lg:ml-28 lg:mr-12">
          <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
            <!-- <svg class="w-4 h-4 text-teal-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg> -->
            <img src="../../public\assets\images\icons\Search.svg" alt="" class="w-6">
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar"
            class="block w-full p-2 pt-2.5 pl-16 text-base font-medium text-teal-900 border border-teal-300 rounded-full placeholder:text-gray-800 placeholder:text-lg bg-teal-50 focus:ring-teal-600 focus:border-teal-500"
            placeholder="search cities...">
        </div>
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-teal-500 rounded-lg md:hidden hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 duration-200 dark:text-teal-50 dark:hover:bg-teal-700 dark:hover:text-teal-400 dark:focus:ring-teal-700"
          aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-teal-500 dark:text-teal-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="search-navbar"
            class="block w-full p-2 pl-10 text-sm text-teal-900 border border-teal-300 rounded-lg bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Search...">
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-teal-50 duration-200 font-light rounded md:bg-transparent md:p-0 underline">
              Home
            </a>
          </li>
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-teal-50 duration-200 font-normal rounded hover:bg-teal-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0">
              About
            </a>
          </li>
        </ul>
      </div>
      <button
        class="flex items-center md:order-2 p-2 ml-1 md:ml-5 w-10 h-10 justify-center text-sm text-teal-500 rounded-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 duration-200 dark:text-teal-50 dark:hover:bg-teal-700 dark:hover:text-teal-400 dark:focus:ring-teal-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </nav>

    <section class="max-w-screen-lg grid grid-cols-9 gap-5 mx-auto pt-24">
      <div
        class="relative col-span-5 w-full overflow-hidden whitespace-nowrap flex justify-between px-5 py-4 bg-gray-200 rounded-3xl text-gray-700">
        <div class="flex flex-col justify-between gap-5">
          <h2 class="text-5xl font-medium tracking-tight">
            Paris
            <p class="text-xl -mt-2 ml-0.5">
              Farance
            </p>
          </h2>
          <p class="tracking-tight text-5xl">
            83°F
          </p>
        </div>
        <img class="w-36" src="../../public/assets/images/weather/FewClouds.svg.svg" alt="">
        <button class="absolute right-3 top-3 px-0.5 py-0.5 rounded-full bg-[#85C9C8]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-teal-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        class="relative col-span-4 w-full overflow-hidden whitespace-nowrap flex justify-between px-5 py-4 bg-gray-200 rounded-3xl text-gray-700">
        <div class="flex flex-col justify-between gap-5">
          <h2 class="text-5xl font-medium tracking-tight">
            {{ displayContent('Paris Sant Germain') }}
            <p class="text-xl -mt-2 ml-0.5">
              Farance
            </p>
          </h2>
          <p class="tracking-tight text-5xl">
            83°F
          </p>
        </div>
        <img class="w-36" src="../../public/assets/images/weather/NewProject1.svg" alt="">
        <button class="absolute right-3 top-3 px-0.5 py-0.5 rounded-full bg-[#85C9C8]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-teal-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        class="relative col-span-4 w-full overflow-hidden whitespace-nowrap flex justify-between px-5 py-4 bg-gray-200 rounded-3xl text-gray-700">
        <div class="flex flex-col justify-between gap-5">
          <h2 class="text-5xl font-medium tracking-tight">
            Paris
            <p class="text-xl -mt-2 ml-0.5">
              Farance
            </p>
          </h2>
          <p class="tracking-tight text-5xl">
            83°F
          </p>
        </div>
        <img class="w-36" src="../../public/assets/images/weather/FewClouds.svg.svg" alt="">
        <button class="absolute right-3 top-3 px-0.5 py-0.5 rounded-full bg-[#85C9C8]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-teal-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div
        class="relative col-span-5 w-full overflow-hidden whitespace-nowrap flex justify-between px-5 py-4 bg-gray-200 rounded-3xl text-gray-700">
        <div class="flex flex-col justify-between gap-5">
          <h2 class="text-5xl font-medium tracking-tight">
            Paris
            <p class="text-xl -mt-2 ml-0.5">
              Farance
            </p>
          </h2>
          <p class="tracking-tight text-5xl">
            83°F
          </p>
        </div>
        <img class="w-36" src="../../public/assets/images/weather/FewClouds.svg.svg" alt="">
        <button class="absolute right-3 top-3 px-0.5 py-0.5 rounded-full bg-[#85C9C8]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 text-teal-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </section>

    <section class="max-w-screen-lg items-center mx-auto pt-24">
      <div class="flex flex-wrap items-center -mx-3">
        <div class="order-1 w-full px-3 lg:w-4/6 lg:order-0">
          <div class="flex flex-col gap-10 w-full lg:max-w-md whitespace-nowrap">
            <div class="flex flex-col">
              <h2 class="text-3xl font-bold leading-tight tracking-tight text-teal-50 sm:text-9xl font-heading">
                Paris
              </h2>
              <p class="tracking-tight text-teal-50 text-5xl xl:mb-6">
                Thu, Aug 12, 09:00 AM
              </p>
            </div>
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="tracking-tight text-teal-50 text-xl underline">
                  Hourly Forecast
                </p>
              </div>
              <div class="flex gap-6">
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">12 PM</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-base">78°F</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <p class="tracking-tight text-teal-50 text-xl underline">
                  Daily Forecast
                </p>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
                <div class="flex flex-col items-center bg-teal-50 text-[#85C9C8] p-3 rounded-full">
                  <!-- First Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="text-lg font-semibold">Fri</div>
                  </div>
                  <!-- Second Row -->
                  <div class="flex items-center space-x-4 mb-4">
                    <img src="../../public/assets/images/weather/FewClouds.svg.svg" alt="Weather Icon" class="h-10 w-10">
                  </div>
                  <!-- Third Row -->
                  <div class="flex items-center space-x-4">
                    <div class="text-lg font-semibold">78°F</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-1 w-full px-3 lg:w-2/6 order-0 lg:order-1 lg:mb-0">
          <img class="mx-auto sm:max-w-sm lg:max-w-full" src="../../public/assets/images/weather/FewClouds.svg.svg"
            alt="feature image">
          <div class="font-medium tracking-tight text-teal-50 text-3xl flex items-end gap-7">
            <h2 class="inline text-3xl font-bold tracking-tight text-teal-50 sm:text-9xl p-0 m-0">
              83°F
            </h2>
            <button class="mb-6 bg-teal-50/80 text-teal-500/50 text-4xl rounded-full p-2 px-2.5 pb-1">
              °C
            </button>
          </div>
          <p class="mb-4 tracking-tight text-teal-50 text-4xl xl:mb-6">
            Few Clouds
          </p>
          <button
            class="mb-4 tracking-tight bg-teal-50/80 text-gray-800 font-medium text-lg px-3 py-px rounded-full xl:mb-6">
            Remove City
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    displayContent(content) {
      if (content.length > 10) {
        return content.substring(0, 10) + " ..."; // Show only the first 10 characters
      } else {
        return content;
      }
    },
  },
}
</script>