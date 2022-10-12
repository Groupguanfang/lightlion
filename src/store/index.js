import { createStore } from "vuex";

export default createStore({
  state: {
    downLoadPage: {
      isBilibiliOpen: false,
      isNewsOpen: false,
    },
    isLogin: false,
    userCenter: {
      dialog: false,
      id: null,
      preID: null
    }
  },
  mutations: {
    updateBilibiliStatus(state) {
      state.downLoadPage.isBilibiliOpen =
        !state.downLoadPage.isBilibiliOpen;
    },
    UserDeleteDialog(state,id) {
      state.userCenter.dialog = !state.userCenter.dialog
      state.userCenter.preID = id
    },
    UserDeleteId(state) {
      state.userCenter.id = state.userCenter.preID
    }
  },
  actions: {},
  modules: {},
});
