<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    "$store.state.downLoadPage.isBilibiliOpen"() {
      if (this.$store.state.downLoadPage.isBilibiliOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<template>
  <div class="bilibili">
    <t-popup v-model="isOpen" placement="center">
      <div style="width: 100%; height: 100%; background: #fff"></div>
    </t-popup>
  </div>
</template>
