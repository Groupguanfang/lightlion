<script>
import { UserAddIcon } from "tdesign-icons-vue-next"
import { loginAction } from "../../api/User";
export default {
  components: { UserAddIcon },
  data() {
    return {
      username: "",
      password: "",
      buttonLoading: false
    }
  },
  methods: {
    async loginActionTo() {
      this.buttonLoading = true;
      const action = await loginAction(this.username,this.password);
      console.log(action.data);
      
      if (action.data.code !== 500) {
        localStorage.setItem('token',action.data[0].token);
        this.$router.push('/usercenter')
      } else {
        this.$toast(action.data.message)
      }
      
      this.buttonLoading = false;
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
      <t-button :loading="buttonLoading" block style="margin-top: 10px" theme="primary" @click="loginActionTo()">登录</t-button>
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