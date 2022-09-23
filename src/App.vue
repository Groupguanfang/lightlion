<script>
import MenuDrawer from "./components/Menu.vue";
export default {
  components: { MenuDrawer }
}
</script>

<template>
  <div class="app">
    <router-view />
    <menu-drawer />
  </div>
</template>