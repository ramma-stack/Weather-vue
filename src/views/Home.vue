<template>
    <section v-if="cities" class="max-w-screen-lg grid grid-cols-6 gap-5 mx-auto pt-10">
        <div v-if="currentLocation" v-for="city in currentLocation"
            class="relative w-full col-span-6 sm:col-span-3 xl:col-span-2 overflow-hidden whitespace-nowrap flex justify-between items-center px-4 py-3.5 bg-gray-200 rounded-3xl text-gray-700">
            <div class="flex flex-col justify-between gap-3">
                <h2 @click="previewCity(city)"
                    :class="checkCharacter(city.city) ? 'text-xl font-medium' : 'text-2xl font-medium'"
                    class="tracking-tight cursor-pointer">
                    {{ displayContent(city.city) }}
                    <p :class="checkCharacter(city.city) ? '' : '-mt-1.5'" class="text-sm ml-0.5">
                        {{ city.state }}
                    </p>
                </h2>
                <p class="tracking-tight font-medium text-4xl leading-none -mb-1">
                    {{ Math.round(tempCheck(city.temp)) }}°{{ currentUnit }}
                </p>
            </div>
            <div class="flex flex-col items-center gap-2 mr-5 mt-2">
                <img class="w-14 md:w-16 xl:w-14 px-1" :src="getWeatherIconUrl(city.icon)" alt="">
                <p class="text-xs md:text-sm xl:text-xs font-medium capitalize">
                    {{ city.disc }}
                </p>
            </div>
        </div>
        <SkeletonLoader v-if="isLoading"
            class="w-full col-span-6 sm:col-span-3 xl:col-span-2 h-[7.5rem] rounded-3xl" bg-class="bg-gray-100/50"
            shimmer-color="#85C9C8" />
        <div v-if="weatherData" v-for="city in weatherData.sort((a, b) => b.rundom - a.rundom)" :key="city.rundom"
            class="relative w-full col-span-6 sm:col-span-3 xl:col-span-2 overflow-hidden whitespace-nowrap flex justify-between items-center px-4 py-3.5 bg-gray-200 rounded-3xl text-gray-700">
            <div class="flex flex-col justify-between gap-3">
                <h2 @click="previewCity(city)"
                    :class="checkCharacter(city.city) ? 'text-xl font-medium' : 'text-2xl font-medium'"
                    class="tracking-tight cursor-pointer">
                    {{ displayContent(city.city) }}
                    <p :class="checkCharacter(city.city) ? '' : '-mt-1.5'" class="text-sm ml-0.5">
                        {{ city.state }}
                    </p>
                </h2>
                <p class="tracking-tight font-medium text-4xl leading-none -mb-1">
                    {{ Math.round(tempCheck(city.temp)) }}°{{ currentUnit }}
                </p>
            </div>
            <div class="flex flex-col items-center gap-2 mr-5 mt-2">
                <img class="w-14 md:w-16 xl:w-14 px-1" :src="getWeatherIconUrl(city.icon)" alt="">
                <p class="text-xs md:text-sm xl:text-xs font-medium capitalize">
                    {{ city.disc }}
                </p>
            </div>
            <button @click="removeCity(city)"
                class="absolute right-3 top-3 px-0.5 py-0.5 rounded-full bg-[#85c9c8d8] dark:bg-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 text-teal-50">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <SkeletonLoader v-if="isLoading" v-for="n in lengthLocalStorage"
            class="w-full col-span-6 sm:col-span-3 xl:col-span-2 h-[7.5rem] rounded-3xl" bg-class="bg-gray-100/50"
            shimmer-color="#85C9C8" />
        <div class="col-span-6 grid grid-cols-6 gap-4" v-if="lengthLocalStorage === 0">
            <h1
                class="text-xl lg:text-3xl font-medium tracking-tight text-center text-gray-700 col-span-6 mt-5 mb-10 px-4 py-3.5 bg-gray-200 rounded-3xl">
                You have no cities added yet. Please add a city to view on the home.
            </h1>
            <SkeletonLoader v-for="n in 9" class="col-span-6 sm:col-span-3 xl:col-span-2 w-full h-28 rounded-3xl"
                bg-class="bg-gray-100/50" shimmer-color="#85C9C8" />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SkeletonLoader from '../components/Skeleton.vue';

export default {
    name: "Home",
    components: {
        SkeletonLoader,
    },
    data() {
        return {
            cities: [
                {
                    city: "New York",
                    state: "NY",
                    lat: 40.7128,
                    lng: 74.0060,
                    icon: "FewClouds",
                }
            ],
            weatherData: [],
            currentLocation: [],
            lengthLocalStorage: 0,
            isLoading: false,
        }
    },
    methods: {
        getWeatherData(lat, lng, city, state, id) {
            try {
                // Fetch weather data using lat and lng
                const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=455e7075a8fe4a762b32573a53b9a0e8&units=imperial`;
                // const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`;
                // const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lng}&exclude={part}&appid=455e7075a8fe4a762b32573a53b9a0e8&units=imperial`;
                axios.get(apiUrl)
                    .then(response => {
                        // Handle the data from the API response
                        const weatherData = response.data;

                        this.weatherData.push({
                            city: city,
                            state: state,
                            lat: lat,
                            lng: lng,
                            icon: weatherData.current.weather[0].icon,
                            temp: weatherData.current.temp,
                            disc: weatherData.current.weather[0].description,
                            rundom: id,
                        });

                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });

            } catch (err) {
                console.log(err);
            }
        },
        displayContent(content) {
            if (content.length > 15) {
                return content.substring(0, 12) + " ..."; // Show only the first 10 characters
            } else {
                return content;
            }
        },
        getWeatherIconUrl(iconCode) {
            return `/assets/images/weather/${iconCode}.svg`; // Point to local image in the public/images folder
        },
        getLocalStorage() {
            let currentCities = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))) || [];
            // using for loop for currentCities
            for (let i = 0; i < currentCities.length; i++) {
                this.getWeatherData(currentCities[i].lat, currentCities[i].lng, currentCities[i].city, currentCities[i].state, i + 1);
            }
        },
        previewCity(value) {
            const city = value.city;
            const state = value.state;
            const lat = value.lat;
            const lng = value.lng;

            // console.log(city, state, lat, lng);

            this.$router.push({
                name: 'City',
                params: { city: city, state: state.replaceAll(" ", "") },
                query: { lat, lng },
            });
        },
        timeOut() {
            this.isLoading = true;
            setTimeout(() => {
                this.getLocation();
                this.getLocalStorage();
                this.isLoading = false;
            }, 500);
        },
        removeCity(city) {
            console.log(city.city);
            let currentCities = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))) || [];
            currentCities = currentCities.filter(c => c.city !== city.city);
            localStorage.setItem('cities', JSON.stringify(currentCities));
            this.weatherData = [];
            this.lengthLocalStorage = currentCities.length;
            // this.getLocalStorage();
            this.timeOut();
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
        tempCheck(temp) {
            // console.log(this.isCelsius);
            if (this.currentUnit === 'C') {
                return (temp - 32) * 5 / 9;
            } else {
                return temp;
            }
        },
        getLocation() {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        console.log("Latitude:", latitude);
                        console.log("Longitude:", longitude);

                        // You can now use the latitude and longitude as needed.
                        // Fetch weather data using lat and lng
                        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=455e7075a8fe4a762b32573a53b9a0e8&units=imperial`;
                        axios.get(apiUrl)
                            .then(response => {
                                // Handle the data from the API response
                                const weatherData = response.data;

                                this.currentLocation = [];
                                this.currentLocation.push({
                                    city: weatherData.timezone.split('/')[1].replaceAll("_", " "),
                                    state: weatherData.timezone.split('/')[0].replaceAll("_", " "),
                                    lat: weatherData.lat,
                                    lng: weatherData.lon,
                                    icon: weatherData.current.weather[0].icon,
                                    temp: weatherData.current.temp,
                                    disc: weatherData.current.weather[0].description,
                                });
                                console.log(this.currentLocation);
                            })
                            .catch(error => {
                                console.error('Error fetching weather data:', error);
                            });
                    },
                    (error) => {
                        console.error("Error getting location:", error.message);
                    }
                );
            } else {
                console.error("Geolocation is not available in this browser.");
            }
        },
    },
    computed: {
        currentUnit() {
            return this.$store.state.localStorageValue;
        }
    },
    mounted() {
        // get length local storage
        try {
            this.lengthLocalStorage = JSON.parse(localStorage.getItem('cities', JSON.stringify(this.storedCities))).length ?? 0;
        } catch (error) {
            this.lengthLocalStorage = 0;
        }
        // this.getLocation();
        this.timeOut();
    },
}
</script>