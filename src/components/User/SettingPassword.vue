<script>
export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
    };
  },
  methods: {
    action() {
      this.$toast("正在开发中")
      if (this.oldPassword === this.newPassword) {
        this.$message.error("新密码不能与旧密码相同");
      }
    },
  },
};
</script>

<template>
  <div class="set-password padding">
    <t-input
      v-model="oldPassword"
      type="password"
      label="旧密码"
      placeholder="必填"
    />
    <t-input
      v-model="newPassword"
      type="password"
      label="新密码"
      placeholder="必填"
    />
    <t-button @click="action()" block theme="primary"> 保存 </t-button>
  </div>
</template>
