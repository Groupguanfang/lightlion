<script>
import { getMedia } from "../../api/User"

export default {
  data() {
    return {
      data: [],
      urls: [],
      showViewer: false
    }
  },
  methods: {
    show() {
      this.showViewer = true
    }
  },
  async created() {
    const data = await getMedia(localStorage.getItem('token'))
    this.data = data.data.data
  },
}
</script>

<template>
  <div class="media">
    <t-navbar>媒体库</t-navbar>
    <div v-for="(item,index) in data" :key="index" style="width: 72px;height: 72px">
    <img class="image-container" @click="show" :src="item.url"/>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  width: 72px;
  height: 72px;
}
</style>
