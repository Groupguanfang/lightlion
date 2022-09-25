<script>
import MenuDrawer from "./components/Menu.vue";
import BilibiliDownLoad from "./pages/Bilibili.vue";
export default {
  components: { MenuDrawer,BilibiliDownLoad }
}
</script>

<template>
  <div class="app">
    <div class="root">
      <router-view />
    </div>
    <div class="drawer">
      <BilibiliDownLoad />
    </div>
    <menu-drawer />
  </div>
</template>

<style scoped>
.root {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.app {
  overflow: hidden;
}
</style>