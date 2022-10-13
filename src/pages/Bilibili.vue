<script>
import NativeShare from "nativeshare";
import { ShareIcon } from "tdesign-icons-vue-next";
import { openBili, copyToClip } from "../utils/copy";
import { getOptions } from "../api/Admin";

export default {
  components: { ShareIcon },
  data() {
    return {
      isOpen: false,
      address: "",
    };
  },
  async mounted() {
    const url = await getOptions("bilibili", localStorage.getItem("token"));
    this.address = url.data.data.value;
  },
  methods: {
    closePop() {
      this.$store.commit("updateBilibiliStatus");
    },
    copyAction() {
      copyToClip(() => {
        alert("口令复制成功 点击按钮调转到App Store");
      });
      openBili(this.address);
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
      :lockScroll="false"
    >
      <div
        style="width: 100%; height: 100%; background: #fff; overflow-y: auto"
      >
        <!-- 开始头部 -->
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
              <a target="_blank" class="link" @click="copyAction">
                <t-button size="small" theme="primary" shape="round">
                  下载
                </t-button>
              </a>
              <ShareIcon @click="shareAction()" style="font-size: 24px" />
            </div>
          </div>
        </div>
        <!-- 头部结束 -->
        <!-- 开始身体 -->
        <div class="info padding">
          <h2>说明</h2>
          <t-steps layout="vertical" readonly>
            <t-step
              status="process"
              title="第一步"
              content="点击上面的下载按钮下载腕上资讯APP"
            />
            <t-step
              status="process"
              title="第二步"
              content="复制口令“LightningLion”，打开刚下载的app后，按照提示安装软件"
            />
            <t-step
              status="process"
              title="第三步"
              content="在手表上找到「腕上RSS」图标，开始使用"
            />
          </t-steps>
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
