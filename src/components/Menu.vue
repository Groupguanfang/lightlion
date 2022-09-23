<script>
export default {
  data() {
    return {
      openBase: false
    }
  },
  '$store.state.isMenuOpen'() {
    if (this.$sore.state.isMenuOpen)
    {
      this.openBase = true
    } else {
      this.openBase = false
    }
  }
}
</script>

<template>
  <t-drawer
    v-model:visible="openBase"
    placement="left"
  />
</template>