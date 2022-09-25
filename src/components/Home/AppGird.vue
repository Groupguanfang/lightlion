<script>
export default {
  methods: {
    openBilibili(action) {
      this.$store.commit(action);
    }
  }
}
</script>

<template>
  <div class="app-gird">
    <t-grid :column="3">
      <t-grid-item
        text="腕上B站"
        @click="openBilibili('updateBilibiliStatus')"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019066-PNG图像.png"
        description="For Apple Watch"
      />
      <t-grid-item
        text="腕上资讯"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019065-PNG图像-3.png"
        description="For Apple Watch"
      />
      <t-grid-item
        text="腕上小说"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019067-PNG图像-2.png"
        description="For Apple Watch"
      />
    </t-grid>
  </div>
</template>

<style scoped>
.app-gird img {
  border-radius: 8px;
}
</style>
