<script>
import {
  HomeIcon,
  LogoWindowsIcon,
  UserCircleIcon,
} from "tdesign-icons-vue-next";
export default {
  components: { HomeIcon, LogoWindowsIcon, UserCircleIcon },
  methods: {
    action() {
      if (
        localStorage.getItem("cookie") === null ||
        localStorage.getItem("cookie") === undefined ||
        localStorage.getItem("cookie") === ""
      ) {
        this.$router.push("/login");
      } else {
        this.$router.push("/usercenter");
      }
    },
  },
};
</script>

<template>
  <t-tab-bar class="options">
    <router-link to="/">
      <t-tab-bar-item>
        <template #icon>
          <HomeIcon />
        </template>
        首页
      </t-tab-bar-item>
    </router-link>
    <router-link to="/discover">
      <t-tab-bar-item>
        <template #icon>
          <LogoWindowsIcon />
        </template>
        发现
      </t-tab-bar-item>
    </router-link>
    <span @click="action()">
      <t-tab-bar-item>
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