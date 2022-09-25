<script>
export default {};
</script>

<template>
  <div class="login padding">
    <h1>登录</h1>
    <t-input label="用户名" placeholder="请输入用户名"></t-input>
    <t-input label="密码" placeholder="请输入密码"></t-input>
    <t-button block style="margin-top: 10px" theme="primary">登录</t-button>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>