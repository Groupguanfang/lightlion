<script>
import SettingPassword from "../../components/User/SettingPassword.vue";
import SettingEmail from "../../components/User/SettingEmail.vue";
import SettingAvatar from "../../components/User/SettingAvatar.vue";

export default {
  components: { SettingPassword, SettingEmail, SettingAvatar },
};
</script>

<template>
  <div class="settings">
    <t-navbar :rightShow="false">
      设置
    </t-navbar>

    <t-tabs default-value="password">
      <t-tab-panel value="password" label="修改密码">
        
        <SettingPassword />
      </t-tab-panel>
      <t-tab-panel value="mail" label="修改邮箱">
        <SettingEmail />
      </t-tab-panel>
      <t-tab-panel value="developer" label="开发者Debug">
        <SettingAvatar />
      </t-tab-panel>
    </t-tabs>
  </div>
</template>
