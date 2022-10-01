<script>
import { getPostItem } from "../../api/Home";
import { WifiIcon } from "tdesign-icons-vue-next";
import { h } from "vue";
export default {
  data() {
    return {
      data: {},
      title: "文章详情",
      progress: 0,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const timer = setInterval(() => {
      this.progress = this.progress + 0.05;

      if (this.progress >= 1) {
        clearInterval(timer);
      }
    }, 200);

    try {
      const data = await getPostItem(id);
      this.data = data.data;
      clearInterval(timer);
      this.progress = 1;
    } catch (error) {
      this.$toast.fail({
        icon: () => h(WifiIcon),
        message: "请检查网络",
        direction: "column",
      });
    }
  },
};
</script>

<template>
  <div class="post-item">
    <t-navbar>{{ title }}</t-navbar>
    <t-loading theme="bar" :progress="progress" />
    <div class="content">
      <h1>{{ data.title }}</h1>
      {{ data.data }}
    </div>
  </div>
</template>
