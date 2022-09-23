import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpen: false
  },
  getters: {
    getMenuStatus(state) {
      return state.isMenuOpen;
    }
  },
  mutations: {
    updateMenuStatus(state) {
      state.isMenuOpen = !state.isMenuOpen;
    }
  },
  actions: {},
  modules: {},
});
