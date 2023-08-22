<template>
    <div>
        <h1>Weather Types and Icons</h1>
        <ul>
            <li v-for="condition in weatherConditions" :key="condition.id">
                <img :src="getWeatherIconUrl(condition.icon)" alt="Weather Icon" />
                {{ condition.main }} - {{ condition.description }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            weatherConditions: [],
        };
    },
    created() {
        const apiKey = '7efa332cf48aeb9d2d391a51027f1a71';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=${apiKey}`;

        axios.get(apiUrl)
            .then(response => {
                this.weatherConditions = response.data.weather;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    },
    methods: {
        getWeatherIconUrl(iconCode) {
            return `http://openweathermap.org/img/w/${iconCode}.png`;
        },
    },
};
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  