<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<template>
  <div class="bilibili">
    <t-popup v-model="isOpen" placement="center">
      <div style="width: 200px; height: 200px; background: #fff"></div>
    </t-popup>
  </div>
</template>
