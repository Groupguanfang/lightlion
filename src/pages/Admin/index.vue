<script>
import { getInfo } from "../../api/User";
import Home from "./Parts/Home.vue";
export default {
  components: { Home },
  async mounted() {
    const control = await getInfo(localStorage.getItem("token"));
    if (control.data.userdata.level != 10) {
      this.$router.push('/');
      this.$toast("您无权访问该页面");
    }
  },
  methods: {},
};
</script>

<template>
  <div class="admin-index">
    <h1 class="padding">管理主页</h1>
    <t-tabs default-value="general">
      <t-tab-panel value="general" label="通用">
        <Home />
      </t-tab-panel>
    </t-tabs>
  </div>
</template>
