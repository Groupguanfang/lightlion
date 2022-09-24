<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="home-swiper">
    <t-swiper>
      <t-swiper-item class="item">
        <img src="../../assets/default-swiper.jpeg" class="img"/>
      </t-swiper-item>
    </t-swiper>
  </div>
</template>

<style>
.item {
  height:100%;
  width: 100%;
  object-fit: cover;
}
.img {
  height: 100%;
  width:100%;
}
</style>