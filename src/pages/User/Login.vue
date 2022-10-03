<script>
import { UserAddIcon } from "tdesign-icons-vue-next";
import { loginAction } from "../../api/User";
import empty from "../../utils/empty";
import LoginOptions from "../../components/User/LoginOptions.vue"
export default {
  components: { UserAddIcon, LoginOptions },
  data() {
    return {
      username: "",
      password: "",
      buttonLoading: false,
    };
  },
  mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/login");
    } else {
      this.$router.push("/usercenter");
      this.$toast("您已登录，为您跳转到用户中心");
    }
  },
  methods: {
    async loginActionTo() {
      this.buttonLoading = true;
      const action = await loginAction(this.username, this.password);
      console.log(action.data);

      if (action.data.code !== 500) {
        localStorage.setItem("token", action.data[0].token);
        this.$router.push("/usercenter");
      } else {
        this.$toast(action.data.message);
      }

      this.buttonLoading = false;
    },
  },
};
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
      <t-input v-model="username" label="用户名" placeholder="请输入用户名" />
      <t-input
        type="password"
        v-model="password"
        label="密码"
        placeholder="请输入密码"
      />
      <t-button
        :loading="buttonLoading"
        block
        style="margin-top: 10px"
        theme="primary"
        @click="loginActionTo()"
      >
        登录
      </t-button>
      <LoginOptions class="bottom"/>
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
.bottom {
  margin-top: 30px;
}
</style>
