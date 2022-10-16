<script>
import { getPostItem } from "../../api/Home";
import BottomBar from "../../components/Post/BottomBar.vue";
import { WifiIcon, UserIcon } from "tdesign-icons-vue-next";
import SingleInfo from "./Single/SingleInfo.vue";
import { h } from "vue";
export default {
  components: { WifiIcon, UserIcon, BottomBar, SingleInfo },
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

    document
      .querySelector(".root")
      .addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const height = document.querySelector(".root").scrollTop;
      if (height >= 200) {
        document.querySelector("#navbar").classList.remove("hide");
        document.querySelector("#navbar").classList.add("show");
      } else {
        document.querySelector("#navbar").classList.remove("show");
        document.querySelector("#navbar").classList.add("hide");
      }
    },
  },
};
</script>

<template>
  <div class="post-item">
    <t-navbar class="header hide" id="navbar">{{ data.title }}</t-navbar>
    <t-loading theme="bar" :progress="progress" />
    <BottomBar />

    <main class="padding">
      <h1>{{ data.title }}</h1>
      <article v-html="data.data"></article>
    </main>
  </div>
</template>

<style lang="less">
.t-navbar {
  .t-navbar__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 58px;
  }
}
.header {
  position: fixed;
  width: 100%;
  transition: ease 0.2s;
  box-shadow: 0 0 10px #88888852;
}
.content-header .author {
  margin-block-end: 0.67em;
}
.show {
  transform: translateY(0);
  transition: ease 0.2s;
}
.hide {
  transform: translateY(-100px);
  transition: ease 0.2s;
}
</style>
