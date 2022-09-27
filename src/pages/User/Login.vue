<script>
import { UserAddIcon } from "tdesign-icons-vue-next"
export default {
  components: { UserAddIcon },
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    loginAcion() {
      
    }
  }
};
</script>

<template>
  <div class="login">
    <t-navbar :rightShow="false">
      心电社区
      <template #right>
        <span @click="$toast('注册暂未开放')">
          <UserAddIcon />
          <span>&nbsp;注册</span>
        </span>
      </template>
    </t-navbar>
    <main class="padding">
      <h1>登录</h1>
      <t-input v-model="username" label="用户名" placeholder="请输入用户名"></t-input>
      <t-input v-model="password" label="密码" placeholder="请输入密码"></t-input>
      <t-button block style="margin-top: 10px" theme="primary" @click="">登录</t-button>
    </main>
  </div>
</template>

<style scoped>
.login main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>