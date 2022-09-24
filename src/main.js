import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TDesign from "tdesign-mobile-vue";
import "./style.css";

const lightLion = createApp(App);
lightLion.use(router);
lightLion.use(store);
lightLion.use(TDesign);
lightLion.mount("#app");
