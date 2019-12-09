import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    system: {
      status: "success",
      message: "systems operating normally",
      icon: "mdi-check-outline"
    }
  },
  getters: {
    system(state) {
      return state.system;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
