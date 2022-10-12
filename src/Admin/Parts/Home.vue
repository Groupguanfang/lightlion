<script>
import AnnouncementVue from "./Home/Announcement.vue";
import DownLoadVue from "./Home/DownLoad.vue"

export default {
  components: { AnnouncementVue, DownLoadVue }
}
</script>

<template>
  <t-tabs default-value="announcement" placement="left">
    <t-tab-panel value="announcement" label="公告">
      <AnnouncementVue
        class="padding"
      />
      <DownLoadVue
        class="padding"
      />
    </t-tab-panel>
  </t-tabs>
</template>