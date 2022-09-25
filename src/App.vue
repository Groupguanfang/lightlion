<script>
import MenuDrawer from "./components/Menu.vue";
import BilibiliDownLoad from "./pages/Bilibili.vue";
export default {
  components: { MenuDrawer, BilibiliDownLoad },
  watch: {
    "$store.state.downLoadPage.isBilibiliOpen"() {
      if (this.$store.state.downLoadPage.isBilibiliOpen) {
        document.getElementById("root").classList.add("deep");
        document.querySelector("body").classList.add("deepbody");
      } else {
        document.getElementById("root").classList.remove("deep");
        document.querySelector("body").classList.remove("deepbody");
      }
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="root" id="root">
      <router-view />
    </div>
    <div class="drawer">
      <BilibiliDownLoad />
    </div>
    <menu-drawer />
  </div>
</template>

<style>
.root {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  transition: ease 0.2s;
}
.deep {
  transform: scale(0.93);
  transition: ease 0.2s;
  border-radius: 8px;
  overflow-y: hidden;
}
.app {
  overflow: hidden;
}
</style>