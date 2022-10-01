<script>
import { getAnnouncement } from "../../../../api/Home";
import { changeAnnouncement } from "../../../../api/Admin";
export default {
  data() {
    return {
      announcement: "",
      loading: true,
    };
  },
  async mounted() {
    const Aannouncement = await getAnnouncement();
    this.announcement = Aannouncement.data.data[0].value;
    this.loading = false;
  },
  methods: {
    async updateAnnouncement() {
      const data = await changeAnnouncement(
        this.announcement,
        localStorage.getItem("token")
      );
      console.log(data);
    },
  },
};
</script>

<template>
  <div class="setting-item">
    <t-input :disabled="loading" v-model="announcement" label="一句话公告" />
    <t-button @click="updateAnnouncement()" theme="primary" block>
      保存公告
    </t-button>
  </div>
</template>