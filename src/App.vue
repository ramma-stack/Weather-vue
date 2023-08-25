<template>
  <div class="bg-[#85C9C8] text-teal-50 min-h-screen w-full p-3 md:p-5 font-custom">
    <!-- <HelloWorld /> -->
    <!-- <Test /> -->
    <Navigation />
    <RouterView v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <!-- <DropDown /> -->
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
}
</script>

<style scoped>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>