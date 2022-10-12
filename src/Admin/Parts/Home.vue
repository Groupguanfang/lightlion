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
    <t-tab-panel value="about" label="关于">
      <div class="about padding">前端：Zero<br>后端：Zero<br>Copyright Since 2022</div>
    </t-tab-panel>
  </t-tabs>
</template>