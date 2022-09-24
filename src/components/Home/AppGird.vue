<script>
export default {
  data() {
    return {
      img1url: "@/assets/icon/bilibili.png"
    }
  }
}
</script>

<template>
  <div class="app-gird">
    <t-grid :column="2">
      <t-grid-item
        text="腕上B站"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019066-PNG图像.png"
        layout="horizontal"
      />
      <t-grid-item
        text="腕上资讯"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019065-PNG图像-3.png"
        layout="horizontal"
      />
      <t-grid-item
        text="腕上小说"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019067-PNG图像-2.png"
        layout="horizontal"
      />
      <t-grid-item
        text="腕上樱花"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019066-PNG图像.png"
        layout="horizontal"
      />
    </t-grid>
  </div>
</template>