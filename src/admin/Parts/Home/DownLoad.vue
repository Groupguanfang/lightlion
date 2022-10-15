<script>
import { getOptions, changeVal } from "../../../api/Admin";

export default {
  data() {
    return {
      value: "",
      loading: true,
    };
  },
  async mounted() {
    const data = await getOptions("bilibili", localStorage.getItem("token"));
    console.log(data);
    this.value = data.data.data.value;
    this.loading = false;
  },
  methods: {
    async update() {
      this.loading = true;
      const data = await changeVal("bilibili", this.value);
      this.$toast(data.data.message);
      this.loading = false;
    },
  },
};
</script>

<template>
  <div class="setting-item">
    <t-input :disabled="loading" v-model="value" label="下载地址" />
    <t-button
      @click="update()"
      :loading="loading"
      :disabled="loading"
      block
      theme="primary"
    >
      保存
    </t-button>
  </div>
</template>
