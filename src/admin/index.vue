<script>
import { getInfo } from "../api/User";
import Home from "./Parts/Home.vue";
import About from "./Parts/About.vue";
import Checker from "./Parts/Checker.vue";
export default {
  components: { Home, About, Checker },
  async mounted() {
    const control = await getInfo(localStorage.getItem("token"));
    if (control.data.userdata.level != 10) {
      this.$router.push("/");
      this.$toast("您无权访问该页面");
    }
  },
};
</script>

<template>
  <div class="admin-index">
    <h1 class="padding">管理主页</h1>
    <t-tabs default-value="general">
      <t-tab-panel value="general" label="通用">
        <Home />
      </t-tab-panel>
      <t-tab-panel value="about" label="关于">
        <About />
      </t-tab-panel>
      <t-tab-panel value="checker" label="待审">
        <Checker />
      </t-tab-panel>
    </t-tabs>
  </div>
</template>

<style scoped>
h1 {
  padding-bottom: 0!important
}
</style>
