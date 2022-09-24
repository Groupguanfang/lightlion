<template>
  <div class="app-gird">
    <t-grid :column="3">
      <t-grid-item
        text="腕上B站"
        @click="$router.push('/bilibili')"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019066-PNG图像.png"
        layout="horizontal"
      />
      <t-grid-item
        text="腕上资讯"
        @click="$router.push('/news')"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019065-PNG图像-3.png"
        layout="horizontal"
      />
      <t-grid-item
        text="腕上小说"
        @click="$router.push('/novel')"
        image="https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019067-PNG图像-2.png"
        layout="horizontal"
      />
    </t-grid>
  </div>
</template>

<style scoped>
.app-gird img {
  border-radius: 8px;
}
</style>
