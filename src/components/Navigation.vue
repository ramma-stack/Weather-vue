<template>
    <nav
        class="max-w-screen-lg flex flex-wrap justify-center sm:justify-start sm:flex-nowrap items-center gap-1 mx-auto md:pt-5">
        <router-link to="/" class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-teal-50">
                <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <span class="text-xl flex items-end whitespace-nowrap dark:text-teal-50">WithWeather</span>
        </router-link>
        <div class="flex justify-end md:order-1 w-full">
            <div for="Large Screen Search" class="relative hidden md:block w-full mx-10 lg:ml-28 lg:mr-12">
                <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
                    <img src="../../public\assets\images\icons\Search.svg" alt="" class="w-6">
                    <span class="sr-only">Search icon</span>
                </div>
                <button v-if="searchQuery != ''" @click="searchQuery = ''"
                    class="absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-gray-700">
                        <path fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <input type="text" id="search-navbar" v-model="searchQuery" @focus="disableZoom" @blur="enableZoom"
                    class="block w-full p-2 pt-2.5 pl-16 pr-10 text-base font-medium text-teal-900 border border-teal-300 dark:border-indigo-800 rounded-full placeholder:text-gray-800 placeholder:text-lg bg-teal-50 focus:ring-teal-600 focus:border-teal-500"
                    placeholder="search cities...">
                <ul class="absolute top-[45px] left-5 z-50 w-11/12 text-[#347f7e] dark:text-indigo-900 font-medium bg-teal-50 py-2 px-1 border-2 border-t-0 border-teal-500 dark:border-indigo-800 rounded-b-xl shadow"
                    v-if="mapBoxSearchResults && searchQuery != ''">
                    <p class="flex items-center gap-2 py-1 px-3" v-if="searchError">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        Sorry, something went wrong, please try again.
                    </p>
                    <p class="flex items-center gap-2 py-1 px-3"
                        v-if="!searchError && mapBoxSearchResults.length === 0 && searchQuery != ''">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clip-rule="evenodd" />
                        </svg>
                        No results match your query, try a different term.
                    </p>
                    <template v-else>
                        <li v-for="searchResult in mapBoxSearchResults" @click="previewCity(searchResult)"
                            class="flex items-center py-1.5 px-3 hover:bg-teal-100 dark:hover:bg-indigo-100 rounded cursor-pointer divide-y-2 divide-slate-900">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            {{ truncateText(searchResult.place_name, 45) }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="flex order-2">
            <router-link to="/"
                class="flex items-center md:order-2 p-2 w-10 h-10 justify-center text-sm dark:hover:text-indigo-900 rounded-lg dark:hover:bg-indigo-100 dark:focus:outline-none focus:ring-2 dark:focus:ring-indigo-200 duration-200 text-white hover:bg-teal-600 hover:text-teal-200 focus:ring-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path
                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
            </router-link>
            <Transition>
                <Modal v-if="showModal" @close="showModal = false" />
            </Transition>
            <button @click="showModal = true"
                class="flex items-center md:order-2 p-2 mx-1 w-10 h-10 justify-center text-sm dark:hover:text-indigo-900 rounded-lg dark:hover:bg-indigo-100 dark:focus:outline-none focus:ring-2 dark:focus:ring-indigo-200 duration-200 text-white hover:bg-teal-600 hover:text-teal-200 focus:ring-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <Popover for="Settings" v-slot="{ open }" class="relative flex md:order-2">
                <PopoverButton :class="open ? '' : 'text-opacity-90'"
                    class="group flex items-center md:order-2 p-2 w-10 h-10 justify-center text-sm dark:hover:text-indigo-900 rounded-lg dark:hover:bg-indigo-100 dark:focus:outline-none focus:ring-2 dark:focus:ring-indigo-200 duration-200 text-white hover:bg-teal-600 hover:text-teal-200 focus:ring-teal-600">
                    <Cog6ToothIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>

                <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel v-slot="{ close }"
                        class="absolute -right-20 sm:right-0 top-10 z-10 mt-3 w-60 px-4 sm:px-0">
                        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <ul class="p-3 space-y-1 text-sm text-gray-700 bg-white">
                                <li>
                                    <div class="group flex p-2 rounded hover:bg-teal-700 dark:hover:bg-indigo-900">
                                        <router-link to="/about" @click="close()"
                                            class="relative inline-flex items-center w-full text-teal-600 dark:text-indigo-900 cursor-pointer">
                                            <UserCircleIcon class="w-6 h-6 group-hover:text-white" />
                                            <span class="ml-3 text-sm font-semibold group-hover:text-white">
                                                About Us
                                            </span>
                                        </router-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="group flex p-2 rounded hover:bg-teal-700 dark:hover:bg-indigo-900">
                                        <label class="relative inline-flex items-center w-full cursor-pointer">
                                            <input type="checkbox" v-model="isCelsius" @change="updateTemperatureUnit"
                                                class="sr-only peer">
                                            <div
                                                class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-200 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-teal-600 dark:peer-checked:bg-indigo-800">
                                            </div>
                                            <span
                                                class="ml-3 text-sm font-semibold text-teal-600 dark:text-indigo-900 group-hover:text-white">
                                                Fahrenheit Temp
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="group flex p-2 rounded hover:bg-teal-700 dark:hover:bg-indigo-900">
                                        <label class="relative inline-flex items-center w-full duration-300 cursor-pointer">
                                            <input type="checkbox" :checked="isDarkMode" @change="toggleDark()"
                                                class="sr-only peer">
                                            <div
                                                class="w-9 h-5 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-200 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-teal-800 dark:peer-checked:bg-indigo-800">
                                            </div>
                                            <span
                                                class="ml-3 text-sm font-semibold text-teal-600 dark:text-indigo-900 group-hover:text-white">
                                                Dark Mode
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
            <Popover for="Search Icon" v-slot="{ open }" class="flex md:order-2 ml-1">
                <PopoverButton :class="open ? '' : 'text-opacity-90'"
                    class="group flex md:hidden items-center md:order-2 p-2 w-10 h-10 justify-center text-sm dark:hover:text-indigo-900 rounded-lg dark:hover:bg-indigo-100 dark:focus:outline-none focus:ring-2 dark:focus:ring-indigo-200 duration-200 text-white hover:bg-teal-600 hover:text-teal-200 focus:ring-teal-600">
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>

                <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                    <PopoverPanel v-slot="{ close }"
                        class="block md:hidden absolute inset-2 top-24 sm:top-12 min-h-min z-10 mt-1 sm:mt-4">
                        <div class="overflow-x-hidden w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div class="flex flex-col items-center gap-1 p-3 space-y-1 text-sm text-gray-700 bg-white">
                                <div for="Small Screen Search" class="relative block w-full mx-1">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        <img src="../../public\assets\images\icons\Search.svg" alt="" class="w-4">
                                        <span class="sr-only">Search icon</span>
                                    </div>
                                    <button v-if="searchQuery != ''" @click="searchQuery = ''"
                                        class="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-4 h-4 text-gray-700">
                                            <path fill-rule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <input type="text" id="search-navbar" v-model="searchQuery" @focus="disableZoom" @blur="enableZoom"
                                        class="block w-full p-1 pt-1.5 pl-10 pr-10 text-sm font-medium text-teal-900 border border-teal-300 dark:border-indigo-800 rounded-full placeholder:text-gray-800 placeholder:text-sm bg-teal-50 focus:ring-teal-600 focus:border-teal-500"
                                        placeholder="search cities...">
                                </div>
                                <ul class="w-full text-[#347f7e] dark:text-indigo-800 font-medium bg-teal-50 dark:bg-indigo-100 py-1 px-1 rounded-lg"
                                    v-if="mapBoxSearchResults && searchQuery != ''">
                                    <p class="flex items-center gap-2 py-1 px-3" v-if="searchError">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg>
                                        Sorry, something went wrong, please try again.
                                    </p>
                                    <p class="flex items-center gap-2 py-1 px-3"
                                        v-if="!searchError && mapBoxSearchResults.length === 0 && searchQuery != ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="w-5 h-5">
                                            <path fill-rule="evenodd"
                                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        No results match your query, try a different term.
                                    </p>
                                    <template v-else>
                                        <li v-for="searchResult in mapBoxSearchResults"
                                            @click="previewCity(searchResult), close()"
                                            class="flex items-center py-1.5 px-3 cursor-pointer divide-y-2 divide-slate-900">
                                            <span class="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="w-5 h-5">
                                                    <path fill-rule="evenodd"
                                                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            {{ truncateText(searchResult.place_name, 45) }}
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </div>
    </nav>
</template>

<script>
import Modal from "./Modal.vue";
import axios from "axios";

export default {
    name: "Navigation",
    components: {
        Modal,
    },
    data() {
        return {
            showModal: false,
            isOpen: false,
            searchQuery: "",
            mapBoxAPIKey: 'pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q',
            mapBoxSearchResults: '',
            searchError: null,
            isDarkMode: localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
        };
    },
    methods: {
        getGeocodeData() {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchQuery}.json?access_token=${this.mapBoxAPIKey}&types=place`)
                .then((response) => {
                    this.mapBoxSearchResults = response.data.features;
                })
                .catch((error) => {
                    this.searchError = error;
                });
        },
        previewCity(searchResult) {
            const [city, state] = searchResult.place_name.split(',');
            const lat = searchResult.geometry.coordinates[1];
            const lng = searchResult.geometry.coordinates[0];

            this.searchQuery = "";
            // console.log(city, state, lat, lng);

            this.$router.push({
                name: 'City',
                params: { city: city, state: state ? state.replaceAll(" ", "") : 'None' },
                query: { lat, lng },
            });
        },
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
            } else {
                return text;
            }
        },
        updateTemperatureUnit() {
            this.$store.commit('updateLocalStorageValue');
        },
        toggleDark() {
            this.isDarkMode = !this.isDarkMode;
            if (this.isDarkMode) {
                localStorage.setItem('color-theme', 'dark');
                document.documentElement.classList.add('dark');
            } else {
                localStorage.setItem('color-theme', 'light');
                document.documentElement.classList.remove('dark');
            }
        },
        disableZoom() {
            document.body.style.zoom = 'reset'; // or any other value you want to use
        },
        enableZoom() {
            document.body.style.zoom = ''; // or any other value you want to use
        },
    },
    mounted() {
        // create local storage for tempreture type
        const temp = localStorage.getItem("temperatureUnit");
        if (temp === "F") {
            this.isCelsius = true;
        } else {
            this.isCelsius = false;
        }

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    },
    computed: {
        localStorageValue() {
            return this.$store.state.localStorageValue
        },
    },
    watch: {
        searchQuery() {
            this.getGeocodeData();
        },
    },
}
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Cog6ToothIcon } from '@heroicons/vue/20/solid'
import { UserCircleIcon } from '@heroicons/vue/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { useDark, useToggle } from '@vueuse/core';
import { Switch } from '@headlessui/vue'

// const enabled = useDark();

// const isDark = useDark();
// console.log(isDark.value);
// const toggleDark = useToggle(enabled);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>