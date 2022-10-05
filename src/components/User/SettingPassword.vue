 <script>
import empty from "../../utils/empty";
import { changePwd } from "../../api/User";
export default {
  data() {
    return {
      password: "",
      passwordRetry: "",
    };
  },
  methods: {
    async action() {
      if (empty(this.password)) {
        this.$toast("请输入新密码");
        return;
      }

      if (empty(this.passwordRetry)) {
        this.$toast("请再次输入密码QWQ");
      }

      if (this.password !== this.passwordRetry) {
        this.$toast("两次密码不一致");
        return;
      }

      const ckr = await changePwd(this.password, localStorage.getItem("token"));
      this.$toast(ckr.data.message)
      if (ckr.data.code=== 200) {
        this.$router.push('/usercenter')
      }
    },
  },
};
</script>

<template>
  <div class="set-password padding">
    <t-input
      v-model="password"
      type="password"
      label="新密码"
      placeholder="必填"
    />
    <t-input
      v-model="passwordRetry"
      type="password"
      label="重新密码"
      placeholder="必填"
    />
    <t-button @click="action()" block theme="primary">保存</t-button>
  </div>
</template>
