<script>
import {
  HomeIcon,
  LogoWindowsIcon,
  UserCircleIcon,
} from "tdesign-icons-vue-next";
export default {
  components: { HomeIcon, LogoWindowsIcon, UserCircleIcon },
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
    <router-link to="/usercenter">
      <t-tab-bar-item>
        <template #icon>
          <UserCircleIcon />
        </template>
        我的
      </t-tab-bar-item>
    </router-link>
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