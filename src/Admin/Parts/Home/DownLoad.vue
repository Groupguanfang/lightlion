<script>
import { changeLink } from "../../../api/Admin";
import { getLink } from "../../../api/Tools";

export default {
  data() {
    return {
      value: ""
    }
  },
  async mounted() {
    const data = await getLink()
    this.value = data.data.bili.link
  },
  methods: {
    async update() {
      const data = await changeLink(this.value)
      this.$toast(data.data.message)
    }
  }
}
</script>

<template>
  <div class="setting-item">
    <t-input v-model="value" label="下载地址" />
    <t-button block theme="primary">保存</t-button>
  </div>
</template>
