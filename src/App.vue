<template>
  <!-- Light Color bg-[#85C9C8] -->
  <!-- Dark Color bg-[#251651]  -->
  <div class="bg-[#85C9C8] dark:bg-[#251651] text-teal-50 min-h-screen w-full p-3 md:p-5 font-custom">
    <Navigation />
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

export default {
  name: 'App',
  components: { Navigation, RouterView },
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