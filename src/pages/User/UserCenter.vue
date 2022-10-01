<script>
import { getInfo } from "../../api/User";
import TabBar from "../../components/TabBar.vue";
export default {
  components: { TabBar },
  data() {
    return {
      userInfo: {},
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
    <t-navbar>用户中心</t-navbar>
    <TabBar />
  </div>
</template>
