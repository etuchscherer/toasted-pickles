import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginPanel: {
      isOpen: false,
      instance: false,
      target: ""
    },
    system: {
      status: "success",
      message: "systems operating normally",
      icon: "mdi-check-outline"
    }
  },
  getters: {
    loginTarget(state) {
      return state.loginPanel.target;
    },
    shouldOpenLoginPanel(state) {
      return state.loginPanel.isOpen;
    },
    system(state) {
      return state.system;
    }
  },
  mutations: {
    loginTarget(state, payload) {
      state.loginPanel.target = payload.name;
    },
    openLoginPanel(state) {
      state.loginPanel.isOpen = true;
    },
    closeLoginPanel(state) {
      state.loginPanel.instance.hide();
      state.loginPanel.isOpen = false;
    },
    setPanelInstance(state, payload) {
      state.loginPanel.isOpen = true;
      state.loginPanel.instance = payload;
    }
  },
  actions: {},
  modules: {}
});
