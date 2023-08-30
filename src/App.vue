<template>
  <div class="bg-[#85C9C8] text-teal-50 min-h-screen w-full p-3 md:p-5 font-custom">
    <Navigation @temperature-unit-change="updateTemperatureUnit" />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import CityView from './components/CityView.vue';
import DropDown from './components/DropDown.vue';

export default {
  name: 'App',
  components: { Navigation, HelloWorld, Test, CityView, DropDown },
  data() {
    return {
      isCelsius: false
    }
  },
  methods: {
    updateTemperatureUnit(newUnit) {
      // this.isCelsius = true;
      // console.log("newUnit");
      // console.log(this.isCelsius);
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 500ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>