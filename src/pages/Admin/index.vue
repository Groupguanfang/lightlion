<script>
import { getInfo } from "../../api/User";
import AnnouncementVue from "./Parts/Home/Announcement.vue";
export default {
  components: { AnnouncementVue },
  async mounted() {
    const control = await getInfo(localStorage.getItem("token"));
    if (control.data.profile.level != 10) {
      this.$router.go(-1);
      this.$toast.fail("您无权访问该页面");
    }
  },
  methods: {},
};
</script>

<template>
  <div class="admin-index padding">
    <h1>管理主页</h1>
    <t-tabs default-value="general">
      <t-tab-panel class="padding" value="general" label="通用">
        <AnnouncementVue />
      </t-tab-panel>
      <t-tab-panel class="padding" value="about" label="关于">
        <div class="about">前端：Zero 后端：Zero Copyright Since 2022</div>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<style>
.admin-index {
  background: #f6f6f6;
  height: 100vh;
}

.admin-index .setting-item .t-input,
.admin-index .setting-item .t-button {
  border-radius: 10px;
}
</style>
