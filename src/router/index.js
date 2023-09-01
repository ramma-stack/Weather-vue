// router.js
import { createRouter, createWebHistory } from "vue-router";
import City from '../views/City.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/weather/:city/:state",
      name: "City",
      component: City,
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
    } | WithWeather`;
  next();
});

export default routes;
