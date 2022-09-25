<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closePop() {
      this.$store.commit("updateBilibiliStatus");
    },
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
    <t-popup
      @close="closePop()"
      class="downLoadPopup"
      v-model="isOpen"
      placement="bottom"
    >
      <div style="width: 100%; height: 100%; background: #fff">
        <slot></slot>
      </div>
    </t-popup>
  </div>
</template>

<style>
.downLoadPopup .t-popup--content {
  height: 95%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.downLoadPopup .t-popup--content div {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
</style>