import { createStore } from "vuex";

export default createStore({
  state: {
    isMenuOpen: false,
    downLoadPage: {
      isBilibiliOpen: false,
    },
  },
  mutations: {
    updateMenuStatus(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    updateBilibiliStatus(state) {
      state.downLoadPage.isBilibiliOpen =
        !$store.state.downLoadPage.isBilibiliOpen;
    },
  },
  actions: {},
  modules: {},
});
