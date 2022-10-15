<script>
import AnnouncementVue from "./Home/Announcement.vue";
import DownLoadVue from "./Home/DownLoad.vue";

export default {
  components: { AnnouncementVue, DownLoadVue },
};
</script>

<template>
  <t-tabs default-value="announcement" placement="left">
    <t-tab-panel value="announcement" label="公告">
      <h3 class="padding">首页设置</h3>
      <AnnouncementVue class="padding" />
      <h3 class="padding">腕上B站下载地址</h3>
      <DownLoadVue class="padding" />
    </t-tab-panel>
  </t-tabs>
</template>
