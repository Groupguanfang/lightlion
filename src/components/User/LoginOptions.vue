<script>
import { AppIcon } from 'tdesign-icons-vue-next';

export default {
  components: { AppIcon }
}
</script>

<template>
  <div class="login-options">
    <t-button
      shape="round"
      @click="$router.push('/forgot')"
    >
      <template #icon>
        <AppIcon />
      </template>
      忘记密码
    </t-button>
  </div>
</template>
