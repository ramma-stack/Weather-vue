// router.js
import { createRouter, createWebHistory } from "vue-router";
import CityView from '../components/CityView.vue';
import HomeView from '../components/HomeView.vue';
import About from '../components/About.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/weather/:city/:state",
      name: "CityView",
      component: CityView,
      meta: {
        title: "City",
      },
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "About",
      },
    }
  ],
});

routes.beforeEach((to, from, next) => {
  document.title = `${to.params.state
    ? `${to.params.city}, ${to.params.state}`
    : to.meta.title
    } | The Local Weather`;
  next();
});

export default routes;
