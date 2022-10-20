<script>
import { getMedia } from "../../api/User"
import axios from "axios"

export default {
  data() {
    return {
      data: [],
      loading: false,
      showUploader: true
    }
  },
  async mounted() {
    await this.refreshData()
  },
  methods: {
    async refreshData() {
      const data = await getMedia(localStorage.getItem('token'))
      this.data = data.data.data
    },
    async uploadImage(e) {
      this.loading = true
      this.showUploader = false
      let formdata = new FormData();
      formdata.append('avatar',e.target.files[0])
      formdata.append('cookie',localStorage.getItem('token'))
      const file = await axios({
        method: "post",
        baseURL: import.meta.env.VITE_APP_API_URL,
        url: "/singleupload",
        headers: {
          contentType: "multipart/form-data"
        },
        data: formdata
      })
      this.refreshData()
      this.loading = false
      this.showUploader = true
      this.$toast(file.data.message)
    },
  }
}
</script>

<template>
  <div class="media">
    <t-navbar>媒体库</t-navbar>
    <t-loading class="loading" v-if="loading" text="上传中 请勿刷新页面" />
    <div v-if="showUploader" class="container">
      <div class="replace">上传图片</div>
      <input
        class="uploader"
        type="file"
        @change="uploadImage($event)"
        accept="image/*"
      />
    </div>
    <div class="files">
      <div class="item" v-for="(item,index) in data" :key="index">
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
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  width: 100%;
  height: 50px;
  overflow: hidden;
  .replace {
    width: 100%;
    height: 100%;
    background: #0052D9;
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 50px;
  }
}
.files {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .item {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
