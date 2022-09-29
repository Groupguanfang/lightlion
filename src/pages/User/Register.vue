$to<script>
import { checkName, regAction } from "../../api/User";
import { ChevronRightIcon } from "tdesign-icons-vue-next";
export default {
  components: { ChevronRightIcon },
  data() {
    return {
      username: "",
      password: "",
      retryPassword: "",
      email: "",
      buttonLoading: false,
      buttonDisabled: true,
      nameError: ""
    }
  },
  methods: {
    async checker() {
      this.buttonLoading = true
      if (this.password === this.retryPassword) {
        const name = await checkName(this.username)
        if (name.data.code === 200)
        {
          this.buttonDisabled = false
          this.nameError = ""
        } else {
          this.buttonDisabled = true
          this.nameError = name.data.message
        }
      } else {
        this.buttonDisabled = true
      }
      this.buttonLoading = false
    },
    async action() {
      this.buttonLoading = true
      try {
        const reg = await regAction(this.username,this.password,this.email)
        if (reg.data.code !== 500) {
          localStroage.setItem('cookie',reg)
          this.buttonLoading = false
          this.toast('注册成功')
        } else {
          this.buttonLoading = false
          this.$toast(reg.data.message)
        }
      } catch (error) {
        this.$toast(error)
      }
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
      <t-input
        v-model="username"
        label="用户名"
        :errorMessage="nameError"
        placeholder="请输入用户名,支持中英文"
        @change="checker()"
      />
      <t-input
        v-model="email"
        type="email"
        label="邮箱"
        placeholder="请输入邮箱地址"
      />
      <t-input
        v-model="password"
        label="密码"
        type="password"
        placeholder="请输入密码"
        @change="checker()"
      />
      <t-input
        v-model="retryPassword"
        label="确认密码"
        type="password"
        placeholder="请再次输入密码"
        @change="checker()"
      />
      <t-button
        :disabled="buttonDisabled"
        :loading="buttonLoading"
        style="margin-top: 10px"
        theme="primary"
        shape="circle"
        @click="action()"
        size="large"
      >
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