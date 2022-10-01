<script>
import {
  HomeIcon,
  LogoWindowsIcon,
  UserCircleIcon,
} from "tdesign-icons-vue-next";
import empty from "../utils/empty";
export default {
  data() {
    return {
      value: 0,
    };
  },
  components: { HomeIcon, LogoWindowsIcon, UserCircleIcon },
  methods: {
    action() {
      if (empty(localStorage.getItem("token"))) {
        this.$router.push("/login");
      } else {
        this.$router.push("/usercenter");
      }
    },
  },
  mounted() {
    if (this.$route.path === "/") {
      this.value = 0;
    } else if (this.$route.path === "/discover") {
      this.value = 1;
    } else if (this.$route.path === "/usercenter") {
      this.value = 2;
    }
  },
};
</script>

<template>
  <t-tab-bar class="options" :defaultValue="value" :value="value">
    <router-link to="/">
      <t-tab-bar-item :key="0">
        <template #icon>
          <HomeIcon />
        </template>
        首页
      </t-tab-bar-item>
    </router-link>
    <router-link to="/discover">
      <t-tab-bar-item :key="1">
        <template #icon>
          <LogoWindowsIcon />
        </template>
        发现
      </t-tab-bar-item>
    </router-link>
    <span @click="action()">
      <t-tab-bar-item :key="2">
        <template #icon>
          <UserCircleIcon />
        </template>
        我的
      </t-tab-bar-item>
    </span>
  </t-tab-bar>
</template>

<style scoped>
.options {
  display: flex;
  justify-content: space-around;
}
.options a {
  text-decoration: none;
}
</style>
