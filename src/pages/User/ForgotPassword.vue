<script>
import { sendEmail } from "../../api/User";
export default {
  data() {
    return {
      current: 0,
      buttonTest: "发送验证码",
      buttonDisabled: false,
      mail: "",
      code: "",
      newPwd: ""
    };
  },
  methods: {
    async action() {
      this.buttonDisabled = true
      this.buttonTest = "正在发送"
      try {
        const data = await sendEmail(this.mail)
        this.$toast(data.data.message)
      } catch (error) {
        this.$toast("错误：" + error)
      }
      this.buttonDisabled = false
      this.buttonTest = "重新发送"
    }
  }
};
</script>

<template>
  <div class="forgot-password">
    <t-navbar :rightShow="false"> 找回密码 </t-navbar>

    <t-steps v-model="current" :readonly="true">
      <t-step title="提供信息"></t-step>
      <t-step title="重置密码"></t-step>
    </t-steps>

    <main v-if="current === 0" class="padding">
      <t-input v-model="mail" label="邮箱" placeholder="必填" />
      <t-button block @click="current = 1" theme="primary">
      下一步
      </t-button>
    </main>
    
    <main v-if="current === 1" class="padding">
      <t-input v-model="code" label="验证码" placeholder="必填">
        <template #suffix>
          <t-button :disabled="buttonDisabled" variant="text">
            {{ buttonTest }}
          </t-button>
        </template>
      </t-input>
      <t-input v-model="newPwd" label="新密码" placeholder="必填" />
    </main>
  </div>
</template>
