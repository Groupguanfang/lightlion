<script>
import NativeShare from "nativeshare";
import { ShareIcon } from "tdesign-icons-vue-next";
export default {
  components: { ShareIcon },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closePop() {
      this.$store.commit("updateBilibiliStatus");
    },
    shareAction() {
      let nativeShare = new NativeShare();
      try {
        nativeShare.call();
      } catch (err) {
        this.$toast.fail({
          direction: "column",
          message: "当前浏览器不支持分享",
        });
      }
    },
  },
  watch: {
    "$store.state.downLoadPage.isBilibiliOpen"() {
      if (this.$store.state.downLoadPage.isBilibiliOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<template>
  <div class="bilibili">
    <t-popup
      @close="closePop()"
      class="downLoadPopup"
      v-model="isOpen"
      placement="bottom"
    >
      <div style="width: 100%; height: 100%; background: #fff">
        <img class="cover" src="../assets/default-swiper.jpeg" />
        <div class="head-container padding">
          <div class="left">
            <img class="icon" src="../assets/Icon/bilibili.png" />
          </div>
          <div class="right">
            <div class="top">
              <div class="title">腕上B站</div>
              <div class="description">在手表上看B站！</div>
            </div>
            <div class="bottom">
              <a href="" target="_blank" class="link">
                <t-button size="small" theme="primary" shape="round">
                  下载
                </t-button>
              </a>
              <ShareIcon @click="shareAction()" style="font-size: 24px" />
            </div>
          </div>
        </div>
      </div>
    </t-popup>
  </div>
</template>

<style>
.downLoadPopup .t-popup--content {
  height: 95%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.downLoadPopup .t-popup--content div,
.downLoadPopup img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
/* 头部 */
.downLoadPopup .head-container {
  display: flex;
}
.downLoadPopup .head-container .left {
  width: 35%;
}
.downLoadPopup .head-container .right {
  width: 65%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.downLoadPopup .head-container .right .bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.downLoadPopup .head-container .right .title {
  font-size: 24px;
  font-weight: 800;
}
.downLoadPopup .head-container .right .description {
  color: #00000066;
}
.downLoadPopup .head-container .right .link {
  text-decoration: none;
}
.downLoadPopup .head-container .right .link .t-button {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
}
.downLoadPopup img {
  width: 100%;
}
.downLoadPopup .icon {
  border-radius: 22px;
}
</style>