import { createStore } from "vuex";

export default createStore({
  state: {
    downLoadPage: {
      isBilibiliOpen: false,
    },
  },
  mutations: {
    updateBilibiliStatus(state) {
      state.downLoadPage.isBilibiliOpen =
        !state.downLoadPage.isBilibiliOpen;
    },
  },
  actions: {},
  modules: {},
});
