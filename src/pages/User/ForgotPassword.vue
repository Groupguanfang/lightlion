<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
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
      <t-input label="邮箱" placeholder="必填" />
    </main>
  </div>
</template>
