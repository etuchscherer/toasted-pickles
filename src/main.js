import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";
import VueSlideoutPanel from "vue2-slideout-panel";

Vue.use(VueSlideoutPanel);

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyDjBZ4vy3kwg1b3gNdpZa14YnS9ufn94ic",
  authDomain: "test-delete-me-2466b.firebaseapp.com",
  databaseURL: "https://test-delete-me-2466b.firebaseio.com",
  projectId: "test-delete-me-2466b",
  storageBucket: "test-delete-me-2466b.appspot.com",
  messagingSenderId: "463790620876",
  appId: "1:463790620876:web:d8f836556d7f19be404269",
  measurementId: "G-QJHWBYHE76"
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
