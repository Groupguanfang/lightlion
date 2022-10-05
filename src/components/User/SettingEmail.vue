<script>
import { sendEmail, changeMail, getInfo } from "../../api/User";
export default {
  data() {
    return {
      newMail: "",
      code: "",
      buttonText: "发送验证码",
      buttonDisabled: false,
      oldMail: "正在加载中...",
    };
  },
  async mounted() {
    const info = await getInfo(localStorage.getItem("token"));
    this.oldMail = info.data.userdata.email;
  },
  methods: {
    async action() {
      this.buttonDisabled = true;
      this.buttonText = "正在发送";
      const data = await sendEmail(this.newMail);
      console.log(data);
      this.buttonDisabled = false;
      this.$toast(data.data.message);
      this.buttonText = "重新发送";
    },
    async variety() {
      const nextData = await changeMail(
        localStorage.getItem("token"),
        this.newMail,
        this.code
      );
      console.log(nextData);
      this.$toast(nextData.data.message);
      if (nextData.data.code == 200) {
        this.$router.push("/usercenter");
      }
    },
  },
};
</script>

<template>
  <div class="set-email padding">
    <div class="old">当前邮箱地址：{{ oldMail }}</div>
    <t-input
      v-model="newMail"
      label="新邮箱地址"
      placeholder="请输入新的电子邮件地址"
    />
    <t-input v-model="code" label="验证码" placeholder="请输入验证码">
      <template #suffix>
        <t-button
          theme="primary"
          @click="action()"
          :disabled="buttonDisabled"
          variant="text"
        >
          {{ buttonText }}
        </t-button>
      </template>
    </t-input>
    <t-button @click="variety()" block theme="primary">保存</t-button>
  </div>
</template>
