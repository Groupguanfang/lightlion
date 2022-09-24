<script>
import Swiper from "../components/Home/Swiper.vue";
import AppGird from "../components/Home/AppGird.vue";
export default {
  components: { Swiper, AppGird },
  data() {
    return {
      notice: true,
    };
  },
};
</script>

<template>
  <div class="home padding">
    <t-navbar
      @click-right="$store.commit('updateMenuStatus')"
      title=""
      :leftArrow="false"
    >
      <template #left>
        <h1>心电社区</h1>
      </template>
    </t-navbar>
    <Swiper />
    <t-notice-bar
      id="home-notice"
      v-model="notice"
      content="腕上樱花即将合并到腕上B站"
    />
    <AppGird />
  </div>
</template>

<style>
.home #home-notice {
  margin-top: 10px;
  border-radius: 8px;
}
.home .t-navbar {
  margin-top: 24px;
  margin-bottom: 12px;
}
.home .t-navbar .t-navbar__back {
  left: 0;
}
</style>
