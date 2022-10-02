<script>
import BilibiliDownLoad from "./pages/Bilibili.vue";
import TabBar from "./components/TabBar.vue";
import { AddIcon } from 'tdesign-icons-vue-next';
export default {
  components: { BilibiliDownLoad, TabBar, AddIcon },
  data() {
    return {
      showFab: false
    }
  },
  mounted() {
    if (this.$route.path === "/usercenter") {
      this.showFab = true
    } else {
      this.showFab = false
    }
  },
  watch: {
    // 腕上B站
    "$store.state.downLoadPage.isBilibiliOpen"() {
      if (this.$store.state.downLoadPage.isBilibiliOpen) {
        document.getElementById("root").classList.add("deep");
        document.querySelector("body").classList.add("deepbody");
      } else {
        document.getElementById("root").classList.remove("deep");
        document.querySelector("body").classList.remove("deepbody");
      }
    },
    "$route.path"() {
      if (this.$route.path === "/usercenter") {
        this.showFab = true
      } else {
        this.showFab = false
      }
    }
  },
};
</script>

<template>
  <div class="app">
    <!-- 主要内容 -->
    <div class="root" id="root">
      <router-view />
      <t-fab v-if="showFab" text="新建草稿">
        <template #icon>
          <AddIcon />
        </template>
      </t-fab>
    </div>
    <!-- 覆层 -->
    <BilibiliDownLoad />
  </div>
</template>

<style>
.root {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  transition: ease 0.2s;
}
.deep {
  transform: scale(0.93);
  transition: ease 0.2s;
  border-radius: 8px;
  overflow: hidden !important;
}
.app {
  overflow: hidden;
}
#app {
  overflow: hidden;
}
</style>