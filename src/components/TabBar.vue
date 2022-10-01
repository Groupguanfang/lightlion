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
      value: "home",
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
};
</script>

<template>
  <t-tab-bar class="options" v-model="value">
    <router-link to="/">
      <t-tab-bar-item key="home">
        <template #icon>
          <HomeIcon />
        </template>
        首页
      </t-tab-bar-item>
    </router-link>
    <router-link to="/discover">
      <t-tab-bar-item key="discover">
        <template #icon>
          <LogoWindowsIcon />
        </template>
        发现
      </t-tab-bar-item>
    </router-link>
    <span @click="action()">
      <t-tab-bar-item key="user">
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
