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
        image="@/assets/icon/bilibili.png"
      />
      <t-grid-item
        text="腕上资讯"
        image="../../assets/icon/news.png"
      />
      <t-grid-item
        text="腕上小说"
        image="../../assets/icon/novel.png"
      />
      <t-grid-item
        text="腕上樱花"
        image="../../assets/icon/bilibili.png"
      />
    </t-grid>
  </div>
</template>