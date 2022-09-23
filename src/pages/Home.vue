<script>
export default {
  methods: {
    openMenuDrawer() {
      this.$store.commit('updateMenuStatus')
    }
  }
}
</script>

<template>
  <div class="home">
    <t-navbar
      @click-right="openMenuDrawer()"
      title=""
      :leftArrow="false"
    >
      <template #left>
        心电社区
      </template>
    </t-navbar>
  </div>
</template>