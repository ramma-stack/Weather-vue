<template>
    <nav class="max-w-screen-lg flex flex-nowrap items-center mx-auto md:pt-5">
        <router-link to="/" class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 text-teal-50">
                <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <span class="text-xl flex items-end whitespace-nowrap dark:text-teal-50">WithWeather</span>
        </router-link>
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
                <input type="text" id="search-navbar" v-model="searchQuery"
                    class="block w-full p-2 pt-2.5 pl-16 pr-10 text-base font-medium text-teal-900 border border-teal-300 rounded-full placeholder:text-gray-800 placeholder:text-lg bg-teal-50 focus:ring-teal-600 focus:border-teal-500"
                    placeholder="search cities...">
                <ul class="absolute top-[45px] left-5 z-50 w-11/12 text-[#347f7e] font-medium bg-teal-50 py-2 px-1 border-2 border-t-0 border-teal-500 rounded-b-xl shadow"
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
                            class="flex items-center py-1.5 px-3 cursor-pointer divide-y-2 divide-slate-900">
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
        <div class="relative items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500 dark:text-teal-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg class="w-4 h-4 text-teal-500 dark:text-teal-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search-navbar" v-model="searchQuery"
                        class="block w-full p-2 pl-10 text-sm text-teal-900 border border-teal-300 rounded-lg bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Search...">
                </div>
                <ul class="absolute top-0 left-0 z-50 text-white w-full bg-gray-800 py-2 px-1 border-t border-gray-700"
                    v-if="mapBoxSearchResults && searchQuery != ''">
                    <p class="flex items-center gap-2 py-2 px-5" v-if="searchError">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        Sorry, something went wrong, please try again.
                    </p>
                    <p class="flex items-center gap-2 py-2 px-5"
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
                            class="py-2 px-5 cursor-pointer">
                            {{ searchResult.place_name }}
                        </li>
                    </template>
                </ul>
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <router-link to="/"
                        class="block py-2 pl-3 pr-4 text-teal-50 duration-200 font-light rounded md:bg-transparent md:p-0 underline">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/about"
                        class="block py-2 pl-3 pr-4 text-teal-50 duration-200 font-normal rounded hover:bg-teal-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0">
                        About
                    </router-link>
                </li>
            </ul>
        </div>
        <Transition>
            <Modal v-if="showModal" @close="showModal = false" />
        </Transition>
        <button @click="showModal = true"
            class="flex items-center md:order-2 p-2 mr-2 ml-5 w-10 h-10 justify-center text-sm text-teal-500 rounded-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 duration-200 dark:text-teal-50 dark:hover:bg-teal-700 dark:hover:text-teal-400 dark:focus:ring-teal-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd" />
            </svg>
        </button>
        <Menu as="div" class="relative flex items-center md:order-2">
            <div>
                <MenuButton
                    class="inline-flex w-full justify-center p-2.5 text-sm font-medium text-teal-500 rounded-lg hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 duration-200 dark:text-teal-50 dark:hover:bg-teal-700 dark:hover:text-teal-400 dark:focus:ring-teal-700">
                    <Cog6ToothIcon class="h-5 w-5" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute right-0 top-9 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <PencilIcon :active="active" class="mr-2 h-5 w-5 text-teal-400" aria-hidden="true" />
                            Edit
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <DocumentDuplicateIcon :active="active" class="mr-2 h-5 w-5 text-teal-400"
                                aria-hidden="true" />
                            Duplicate
                        </button>
                        </MenuItem>
                    </div>
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <ArchiveBoxIcon :active="active" class="mr-2 h-5 w-5 text-teal-400" aria-hidden="true" />
                            Archive
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <ArrowTopRightOnSquareIcon :active="active" class="mr-2 h-5 w-5 text-teal-400"
                                aria-hidden="true" />
                            Move
                        </button>
                        </MenuItem>
                    </div>
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-teal-500 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <TrashIcon :active="active" class="mr-2 h-5 w-5 text-teal-400" aria-hidden="true" />
                            Delete
                        </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
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
                name: 'CityView',
                params: { city: city, state: state.replaceAll(" ", "") },
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
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
    },
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeDestroy() {
        // Remove the click event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    },
    watch: {
        searchQuery() {
            this.getGeocodeData();
        },
    },
}
</script>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Cog6ToothIcon } from '@heroicons/vue/20/solid'
import { ArchiveBoxIcon } from '@heroicons/vue/20/solid'
import { DocumentDuplicateIcon } from '@heroicons/vue/20/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'
import { PencilIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/20/solid'
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