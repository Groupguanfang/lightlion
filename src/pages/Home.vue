<script>
import Swiper from "../components/Home/Swiper.vue"
export default {
  components: {
    Swiper
  }
}
</script>

<template>
  <div class="home">
    <t-navbar
      @click-right="$store.commit('updateMenuStatus')"
      title=""
      :leftArrow="false"
    >
      <template #left>
        心电社区
      </template>
    </t-navbar>
    
    <Swiper />
  </div>
</template>