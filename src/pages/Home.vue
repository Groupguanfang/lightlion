<script>
import Swiper from "../components/Home/Swiper.vue";
import AppGird from "../components/Home/AppGird.vue";
import { UserIcon } from "tdesign-icons-vue-next";
import TabBar from "../components/TabBar.vue";
import { getAnnouncement } from "../api/Home";
import empty from "../utils/empty";
export default {
  components: { TabBar, Swiper, AppGird, UserIcon },
  data() {
    return {
      notice: true,
      content: "正在获取最新公告...",
    };
  },
  async mounted() {
    const announcement = await getAnnouncement();
    this.content = announcement.data.data[0].value;
  },
  methods: {
    action() {
      if (empty(localStorage.getItem("token"))) {
        this.$router.push("/login");
      } else {
        this.$router.push("/usercenter");
      }
    },
  },
};
</script>

<template>
  <div class="home padding">
    <t-navbar :right-show="false" title="" :leftArrow="false">
      <template #left>
        <h1>心电社区</h1>
      </template>
      <template #right>
        <t-avatar size="small" @click="action()">
          <template #icon>
            <UserIcon style="font-size: 16px" />
          </template>
        </t-avatar>
      </template>
    </t-navbar>
    <Swiper />
    <t-notice-bar id="home-notice" v-model="notice" :content="content" />
    <AppGird />
    <TabBar />
  </div>
</template>

<style>
.home {
  height: 100%;
}
.home #home-notice {
  margin-top: 10px;
  border-radius: 8px;
}
.home .t-navbar {
  margin-top: 24px;
  margin-bottom: 12px;
}
.home .t-navbar .t-navbar__back {
  left: 0;
}
.home .t-navbar .t-navbar__right {
  right: 5px;
}
</style>
