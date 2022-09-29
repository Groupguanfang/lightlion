<script>
import { getInfo } from "../../api/User"
import TabBar from "../../components/TabBar.vue"
export default {
  components: { TabBar }
  data() {
    return {
      userInfo: {}
    }
  },
  async mounted() {
    const info = await getInfo(localStorage.getItem('cookie'))
    this.userInfo = info
  }
}
</script>

z<template>
  <div class="usercenter">
    <t-navbar>用户中心</t-navbar>
    <TabBar />
  </div>
</template>
