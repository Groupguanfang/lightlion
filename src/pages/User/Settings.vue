<script>
import SettingPassword from "../../components/User/SettingPassword.vue";
import SettingEmail from "../../components/User/SettingEmail.vue";


export default {
  components: { SettingPassword, SettingEmail },
};
</script>

<template>
  <div class="settings">
    <t-navbar :rightShow="false"> 设置 </t-navbar>

    <t-tabs default-value="password">
      <t-tab-panel value="password" label="通用">
        <SettingPassword />
        <SettingEmail />
      </t-tab-panel>
      <t-tab-panel value="developer" label="开发者Debug"> </t-tab-panel>
    </t-tabs>
  </div>
</template>
