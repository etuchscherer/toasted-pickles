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
      icon: "mdi-check-outline",
      time: ""
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
    },
    time(state) {
      return state.system.time;
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
    },
    updateTime(state) {
      state.system.time = +new Date();
    }
  },
  actions: {
    startTime({ commit }) {
      setInterval(() => {
        commit("updateTime");
      }, 1000);
    }
  },
  modules: {}
});
