<script>
export default {
  methods: {
    openBilibili(action) {
      this.$store.commit(action);
    },
  },
  data() {
    return {
      bili: import.meta.env.VITE_APP_API_URL + "/static/bili.png",
      news: import.meta.env.VITE_APP_API_URL + "/static/news.png",
      books: import.meta.env.VITE_APP_API_URL + "/static/books.png",
    };
  },
};
</script>

<template>
  <div class="app-gird">
    <t-grid :column="3">
      <t-grid-item
        text="腕上B站"
        @click="openBilibili('updateBilibiliStatus')"
        :image="bili"
        description="For Apple Watch"
      />
      <t-grid-item
        text="腕上资讯"
        :image="news"
        description="For Apple Watch"
      />
      <t-grid-item
        text="腕上小说"
        :image="books"
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
