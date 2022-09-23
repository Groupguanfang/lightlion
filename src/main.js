import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-mobile-vue';

const lightLion = createApp(App)
lightLion.use(router)
lightLion.use(TDesign)
lightLion.mount('#app')