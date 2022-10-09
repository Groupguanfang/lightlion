<script>
import axios from "axios";

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
  created() {
    axios({
    baseURL:import.meta.env.VITE_APP_API_URL,
    url: "/user/media",
    method: "get",
    params: {
      cookie: localStorage.getItem('token')
    }
    }).then(() => {
      this.data = arr.data.data
    })
  },
}
</script>

<template>
  <div class="media">
    <t-navbar>媒体库</t-navbar>
    <div v-for="(item,index) in data" :key="index" style="width: 72px;height: 72px">
    <t-image class="image-container" @click="show" :src="item.url">
    </t-image>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  width: 72px;
  height: 72px;
}
</style>
