<template>
    <section class="max-w-screen-lg items-center mx-auto pt-10 md:pt-16 lg:pt-24">
        <div v-if="weatherData" class="flex flex-wrap items-center gap-5 lg:gap-0 -mx-3">
            <div class="order-1 w-full px-3 lg:w-4/6 lg:order-0">
                <div class="flex flex-col gap-10 w-full lg:max-w-md whitespace-nowrap">
                    <div class="flex flex-col items-center lg:items-start">
                        <h2 :class="checkCharacter(city) ? 'font-semibold text-4xl sm:text-8xl mb-8' : 'font-bold text-5xl sm:text-9xl'"
                            class="leading-tight tracking-tight text-teal-50 font-heading">
                            {{ city }}
                        </h2>
                        <p class="tracking-tight text-teal-50 text-3xl sm:text-5xl xl:mb-6">
                            {{ formatDate(weatherData.current.dt, 'W') }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-wrap items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="tracking-tight text-teal-50 text-xl underline">
                                Hourly Forecast
                            </p>
                        </div>
                        <div class="flex flex-wrap sm:flex-nowrap gap-6">
                            <div v-for="(hour, index) in weatherData.hourly.slice(0, 7)" :key="index"
                                class="flex flex-col items-center gap-2">
                                <div class="flex items-center space-x-4">
                                    <div class="text-base">
                                        {{ formatDate(hour.dt, 'H') }}
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <img :src="getWeatherIconUrl(hour.weather[0].icon)" alt="Weather Icon"
                                        class="h-10 w-10">
                                </div>
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-base">
                                        {{ Math.round(tempCheck(hour.temp)) }}°{{ currentUnit }}
                                    </h1>
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
                        <div class="flex flex-wrap sm:flex-nowrap gap-4">
                            <div v-for="(day, index) in weatherData.daily.slice(0, 7)" :key="index"
                                class="flex flex-col items-center bg-teal-50/40 text-[#85C9C8] dark:text-white p-3 rounded-full">
                                <div class="flex items-center space-x-4 mb-4">
                                    <div class="text-lg font-semibold">
                                        {{ formatDate(day.dt, 'S_H') }}
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4 mb-4">
                                    <img :src="getWeatherIconUrl(day.weather[0].icon)" alt="Weather Icon" class="h-10 w-10">
                                </div>
                                <div class="flex items-center space-x-4">
                                    <h1 class="text-lg font-semibold">
                                        {{ Math.round(tempCheck(day.temp.max)) }}°{{ currentUnit }}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-1 w-full px-3 lg:w-2/6 order-0 lg:order-1 lg:mb-0">
                <img class="mx-1 mb-7 w-2/3 sm:max-w-sm lg:w-72"
                    :src="getWeatherIconUrl(weatherData.current.weather[0].icon)" alt="feature image">
                <div class="font-medium tracking-tight text-teal-50 text-3xl flex items-end gap-7">
                    <h2 v-if="isCelsius === false"
                        class="inline text-5xl font-bold tracking-tight text-teal-50 sm:text-9xl p-0 m-0">
                        {{ Math.round(tempCheck(weatherData.current.temp)) }}°{{ currentUnit }}
                    </h2>
                </div>
                <p class="mb-4 tracking-tight text-teal-50 text-3xl sm:text-4xl xl:mb-6 capitalize">
                    {{ weatherData.current.weather[0].description }}
                </p>
                <button @click="toggleCity(cityToAdd)"
                    class="mb-4 tracking-tight bg-teal-50/80 text-gray-800 font-medium text-lg px-3 py-px rounded-full xl:mb-6">
                    <span v-if="isCityAdded" class="flex items-center justify-center gap-1">
                        <BookmarkSlashIcon class="w-5 h-5" />
                        {{ buttonText }}
                    </span>
                    <span v-else class="flex items-center justify-center gap-1">
                        <BookmarkSquareIcon class="w-5 h-5" />
                        {{ buttonText }}
                    </span>
                </button>
            </div>
        </div>
        <div v-if="isLoading" class="flex flex-wrap items-center -mx-3">
            <div class="order-1 w-full px-3 lg:w-4/6 lg:order-0">
                <div class="flex flex-col gap-10 w-full lg:max-w-md whitespace-nowrap">
                    <div class="flex flex-col gap-3">
                        <SkeletonLoader class="w-full h-28 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
                        <SkeletonLoader class="w-full h-16 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
                    </div>
                    <SkeletonLoader class="w-full h-44 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
                    <SkeletonLoader class="w-full h-44 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
                </div>
            </div>
            <div class="flex flex-col items-center w-full px-3 lg:w-2/6 order-0 lg:order-1 lg:mb-0">
                <!-- <img class="mx-auto mb-7 sm:max-w-sm lg:w-72" :src="getWeatherIconUrl(weatherData.current.weather[0].icon)"
                    alt="feature image"> -->
                <SkeletonLoader class="flex justify-center items-center w-full h-48 sm:w-96 mb-10 rounded-2xl"
                    bg-class="bg-gray-100/50" shimmer-color="#85C9C8">
                    <svg class="w-12 h-12 text-gray-100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        fill="#f3f4f6" viewBox="0 0 640 512">
                        <path
                            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                </SkeletonLoader>
                <SkeletonLoader class="w-full h-24 mb-5 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
                <SkeletonLoader class="w-2/3 h-16 rounded-2xl" bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from "axios";
import SkeletonLoader from "../components/Skeleton.vue";
import { BookmarkSlashIcon, BookmarkSquareIcon } from "@heroicons/vue/20/solid";

export default {
    name: "City",
    components: {
        SkeletonLoader,
        BookmarkSquareIcon,
        BookmarkSlashIcon
    },
    data() {
        return {
            city: null,
            state: null,
            lat: null,
            lng: null,
            weatherData: null,
            cityToAdd: '',
            isCityAdded: false,
            cities: [],
            isLoading: false,
            isCelsius: false,
        };
    },
    methods: {
        getWeatherData() {
            try {
                // Fetch weather data using lat and lng
                const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lng}&exclude={part}&appid=455e7075a8fe4a762b32573a53b9a0e8&units=imperial`;
                // const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lng}&exclude={part}&appid=455e7075a8fe4a762b32573a53b9a0e8&units=imperial`;

                axios.get(apiUrl)
                    .then(response => {
                        // Handle the data from the API response
                        const weatherData = response.data;
                        this.weatherData = weatherData;

                        this.cityToAdd = `${this.city}`;
                        // console.log(this.cityToAdd);
                        // console.log(localStorage.getItem('cities')); // Do whatever you want with the data here
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });

            } catch (err) {
                console.log(err);
            }
        },
        formatDate(timestamp, type) {
            if (type === 'W') {
                const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
                const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
                return date.toLocaleDateString(undefined, options);
            } else if (type === 'H') {
                const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
                const options = { hour: 'numeric' };
                return date.toLocaleTimeString(undefined, options);
            } else if (type === 'S') {
                const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
                const options = { weekday: 'long' };
                return date.toLocaleDateString(undefined, options);
            } else if (type === 'S_H') {
                const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
                const options = { weekday: 'short' };
                return date.toLocaleDateString(undefined, options);
            }
        },
        getWeatherIconUrl(iconCode) {
            return `/assets/images/weather/${iconCode}.svg`; // Point to local image in the public/images folder
        },
        toggleCity(cityName) {
            const existingCity = this.cities.find(city => city.city === cityName);
            if (!existingCity) {
                const newCity = {
                    id: this.generateRandomId(),
                    city: cityName,
                    state: this.state,
                    lat: this.lat,
                    lng: this.lng,
                };
                this.cities.push(newCity);
                this.saveCitiesToLocalStorage();
            } else {
                this.removeCity(existingCity);
            }
            this.isCityAdded = !this.isCityAdded;
        },
        tempChange() {
            this.isCelsius = true;
        },
        saveCitiesToLocalStorage() {
            localStorage.setItem('cities', JSON.stringify(this.cities));
        },
        removeCity(city) {
            let currentCities = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))) || [];
            currentCities = currentCities.filter(c => c.id !== city.id);
            localStorage.setItem('cities', JSON.stringify(currentCities));
        },
        generateRandomId() {
            return Date.now();
        },
        called() {
            this.city = this.$route.params.city;
            this.state = this.$route.params.state;
            this.lat = this.$route.query.lat;
            this.lng = this.$route.query.lng;

            const ls = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))) || [];
            for (let i = 0; i < ls.length; i++) {
                // console.log(ls[i].city + '===' + this.city);
                if (ls[i].city === this.city) {
                    this.isCityAdded = true;
                    return;
                } else {
                    this.isCityAdded = false;
                }
            }

            // this.isCityAdded = localStorage.getItem('cities', JSON.stringify(this.storedCities)) ? true : false;
            this.cities = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))) || [];
        },
        checkCharacter(char) {
            const kurdishUnicodeRanges = [
                [0x0600, 0x06FF], // Arabic
                [0x0750, 0x077F], // Arabic Supplement (Kurdish)
                // Add more ranges if needed
            ];

            const charCode = char.charCodeAt(0);

            return kurdishUnicodeRanges.some(([start, end]) => charCode >= start && charCode <= end);
        },
        tempCheck(temps) {
            if (this.currentUnit === 'C') {
                return (temps - 32) * 5 / 9;
            } else {
                return temps;
            }
        },
    },
    computed: {
        iconStyle() {
            if (this.weatherData && this.weatherData.current.weather[0].main === 'Clear') {
                return { filter: 'sepia(1) hue-rotate(30deg)' };
            }
            return {};
        },
        storedCities() {
            return localStorage.getItem('cities');
        },
        buttonText() {
            return this.isCityAdded ? 'Remove City' : 'Add City';
        },
        currentUnit() {
            return this.$store.state.localStorageValue;
        }
    },
    watch: {
        $route(to, from) {
            if (to.params.city && from.params.city) {
                this.called();
                this.getWeatherData();
            }
        },
    },
    mounted() {
        // this.called();
        // this.getWeatherData();
        this.isLoading = true;
        setTimeout(() => {
            this.called();
            this.getWeatherData();
            this.isLoading = false;
        }, 500);
    },
};
</script>
  