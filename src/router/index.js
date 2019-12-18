import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import Plant from "@/views/Plant.vue";
import Controls from "@/views/Controls.vue";
import Login from "@/views/Login.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/plant",
    name: "plant",
    component: Plant
  },
  {
    path: "/controls",
    name: "controls",
    component: Controls
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const shouldRedirectToLogin = requiresAuth && !currentUser;

  if (shouldRedirectToLogin) {
    router.app.$store.commit("loginTarget", to);
    router.app.$store.commit("openLoginPanel");
  } else {
    return next();
  }
});

export default router;
