<template>
    <div class="container flex flex-wrap w-full py-4">
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search"
                class="block w-full p-4 pl-10 font-semibold text-gray-50 bg-gray-700 border-b-4 border-gray-800 focus:ring-0 focus:border-gray-800 focus:bg-gray-800"
                placeholder="Search for a city or state..." required>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
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
</template>

<script>
import axios from 'axios';

export default {
    name: "HomeView",
    data() {
        return {
            searchQuery: "",
            mapBoxAPIKey: 'pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q',
            mapBoxSearchResults: '',
            searchError: null,
        }
    },
    methods: {
        truncateText(text, length) {
            if (text.length > length) {
                return text.substring(0, length) + '...';
            } else {
                return text;
            }
        },
        previewCity(city) {
            this.$router.push({
                name: 'CityView',
                params: {
                    city: city.place_name,
                    lat: city.center[1],
                    lon: city.center[0],
                }
            });
        },
        async searchCity() {
            if (this.searchQuery.length > 0) {
                try {
                    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchQuery}.json?access_token=${this.mapBoxAPIKey}&cachebuster=1625246660186&autocomplete=true&limit=5&language=en`);
                    this.mapBoxSearchResults = response.data.features;
                    this.searchError = false;
                } catch (error) {
                    this.searchError = true;
                    console.log(error);
                }
            } else {
                this.mapBoxSearchResults = '';
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>