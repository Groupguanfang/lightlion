<script>
import Swiper from "../components/Home/Swiper.vue"
import AppGird from "../components/Home/AppGird.vue"
export default {
  components: {
    Swiper,AppGird
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
    
    <AppGird />
  </div>
</template>