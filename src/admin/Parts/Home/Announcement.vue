<script>
import { getAnnouncement } from "../../../api/Home";
import { changeAnnouncement } from "../../../api/Admin";
export default {
  data() {
    return {
      announcement: "",
      loading: true,
    };
  },
  async mounted() {
    const Aannouncement = await getAnnouncement(this.announcement);
    this.announcement = Aannouncement.data.data[0].value;
    this.loading = false;
  },
  methods: {
    async updateAnnouncement() {
      this.loading = true;
      const data = await changeAnnouncement(this.announcement);
      console.log(data);
      this.loading = false;
      this.$toast(data.data.message);
    },
  },
};
</script>

<template>
  <div class="setting-item">
    <t-input :disabled="loading" v-model="announcement" label="一句话公告" />
    <t-button
      :disabled="loading"
      :loading="loading"
      @click="updateAnnouncement()"
      theme="primary"
      block
    >
      保存公告
    </t-button>
  </div>
</template>
