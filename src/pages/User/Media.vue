<script>
import { getMedia } from "../../api/User"

export default {
  data() {
    return {
      data: [],
    }
  },
  async mounted() {
    this.refreshData()
  },
  methods: {
    async refreshData() {
      const data = await getMedia(localStorage.getItem('token'))
      this.data = data.data.data
    },
    uploadImage(e) {
      this.refreshData()
    },
  }
}
</script>

<template>
  <div class="media">
    <t-navbar>媒体库</t-navbar>
    <input class="uploader" type="file" @change="uploadImage($event)" accept="image/*" />
    <div class="files">
      <div v-for="(item,index) in data" :key="index" style="width: 72px;height: 72px">
      <img class="image-container" @click="show" :src="item.url"/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.image-container {
  width: 72px;
  height: 72px;
}
</style>
