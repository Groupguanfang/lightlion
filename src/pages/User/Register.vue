<script>
import { RegAction } from "../../api/User";
export default {
  data() {
    return {
      username: "",
      password: "",
      retryPassword: "",
      email: "",
      buttonLoading: false
    }
  },
  methods: {
    async action() {
      const reg = await RegAction()
    }
  }
}
</script>

<template>
  <div class="login">
    <t-navbar :rightShow="false">
      登录
      <template #right>
        <span @click="$router.push('/register')">
          <UserAddIcon />
          <span>&nbsp;注册</span>
        </span>
      </template>
    </t-navbar>
    <main class="padding">
      <img class="logo" src="../../assets/Icon/logo.png" alt="logo" />
      <t-input v-model="username" label="用户名" placeholder="请输入用户名"></t-input>
      <t-input v-model="password" label="密码" placeholder="请输入密码"></t-input>
      <t-button :loading="buttonLoading" block style="margin-top: 10px" theme="primary" @click="action()">登录</t-button>
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
.login .logo {
  width: 250px;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 40px;
}
</style>