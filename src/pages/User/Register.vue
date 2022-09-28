<script>
import { regAction } from "../../api/User";
import { ChevronRightIcon } from "tdesign-icons-vue-next";
export default {
  components: { ChevronRightIcon },
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
      const reg = await regAction()
    }
  }
}
</script>

<template>
  <div class="register">
    <t-navbar :rightShow="false">
      注册
    </t-navbar>
    <main class="padding">
      <img class="logo" src="../../assets/Icon/logo.png" alt="logo" />
      <t-input v-model="username" label="用户名" placeholder="请输入用户名,支持中英文"></t-input>
      <t-input v-model="email" label="邮箱" placeholder="请输入电子邮箱地址"></t-input>
      <t-input v-model="password" label="密码" placeholder="请输入密码"></t-input>
      <t-input v-model="retryPassword" label="确认密码" placeholder="请输入再次输入密码"></t-input>
      <t-button :loading="buttonLoading" style="margin-top: 10px" theme="primary" shape="circle" @click="action()" size="large">
      <ChevronRightIcon />
    </t-button>
    </main>
  </div>
</template>

<style scoped>
.register main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.register .logo {
  width: 250px;
  height: 100%;
  margin-bottom: 20px;
  margin-top: 40px;
}
</style>