<script>
import MenuDrawer from "./components/Menu.vue";
export default {
  components: { MenuDrawer }
}
</script>

<template>
  <div class="app">
    <div class="root">
      <router-view />
    </div>
    <menu-drawer />
  </div>
</template>