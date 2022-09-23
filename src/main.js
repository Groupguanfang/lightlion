import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const lightLion = createApp(App)
lightLion.use(router)
lightLion.mount('#app')