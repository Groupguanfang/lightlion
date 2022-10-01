<script>
import { getInfo } from "../../api/User";
import TabBar from "../../components/TabBar.vue";
export default {
  components: { TabBar },
  data() {
    return {
      userInfo: {},
      showActionSheet: false,
      items: [
        {
          label: "登出",
          icon: import.meta.env.VITE_APP_API_URL + "/static/poweroff.svg",
        },
        {
          label: "设置",
          icon: import.meta.env.VITE_APP_API_URL + "/static/setting.svg",
        },
      ],
    };
  },
  async mounted() {
    const info = await getInfo(localStorage.getItem("token"));
    this.userInfo = info;
    console.log(this.userInfo);
  },
};
</script>

z
<template>
  <div class="usercenter">
    <t-navbar @click-right="showActionSheet = true">用户中心</t-navbar>
    <TabBar />
    <t-action-sheet type="grid" :items="items" v-model="showActionSheet" />
  </div>
</template>
