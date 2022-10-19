<script>
import { getInfo, logOut } from "../../api/User";
import TabBar from "../../components/TabBar.vue";
import { UserIcon, AddIcon } from "tdesign-icons-vue-next";
import Panel from "../../components/User/Panel.vue";
export default {
  components: { TabBar, UserIcon, Panel, AddIcon },
  watch: {
    "$store.state.userCenter.dialog"() {
      console.log(this.showDialog);
      if (this.$store.state.userCenter.dialog) {
        this.showDialog = true;
      } else {
        this.showDialog = false;
      }
    },
  },
  data() {
    return {
      showDialog: false,
      loading: true,
      maincontent: false,
      name: "",
      id: "",
      saying: "",
      isAdmin: false,
      showActionSheet: false,
      items: [
        {
          label: "登出",
          icon: import.meta.env.VITE_APP_API_URL + "/static/poweroff.svg",
        },
        {
          label: "设置",
          icon: import.meta.env.VITE_APP_API_URL + "/static/setting.svg",
        },
        {
          label: "媒体",
          icon: import.meta.env.VITE_APP_API_URL + "/static/media.svg",
        },
      ],
    };
  },
  async created() {
    try {
      const info = await getInfo(localStorage.getItem("token"));

      if (info.data.code !== 500) {
        this.name = info.data.userdata.name;
        this.id = info.data.userdata.id;
        this.saying = info.data.userdata.saying;
        if (info.data.userdata.level == 10) {
          this.isAdmin = true
        }
        this.loading = false;
        this.maincontent = true;
      } else {
        this.$toast.fail("登录已过期，请重新登录");
        this.$router.push("/");
        localStorage.removeItem("token");
      }
    } catch (err) {
      this.$toast(err);
    }
  },
  methods: {
    async handleSelected(selected, selectedIndex) {
      if (selectedIndex === 0) {
        try {
          const logoutAction = await logOut(localStorage.getItem("token"));
          console.log(logoutAction);
          this.$toast(logoutAction.data.message);
          localStorage.removeItem("token");
          this.$router.push("/");
        } catch (err) {
          this.$toast(err);
          return;
        }
      } else if (selectedIndex === 1) {
        this.$router.push("/usercenter/settings");
      } else if (selectedIndex === 2) {
        this.$router.push("/usercenter/media");
      }
    },
    confirm() {
      this.$store.commit("UserDeleteId");
    },
    close() {
      this.$store.commit("UserDeleteDialog", null);
    },
  },
};
</script>

<template>
  <div class="usercenter">
    <t-navbar :leftArrow="false" @click-right="showActionSheet = true">
      用户中心
    </t-navbar>
    <t-dialog
      v-model:visible="showDialog"
      title="确认删除？"
      cancelBtn="取消"
      confirmBtn="删除"
      @confirm="confirm()"
      @close="close()"
    />
    <t-fab
      class="fab"
      text="新建草稿"
      @click="$router.push('/usercenter/newdraft')"
    >
      <template #icon>
        <AddIcon />
      </template>
    </t-fab>
    <TabBar />
    <t-action-sheet
      @selected="handleSelected"
      type="grid"
      :items="items"
      v-model="showActionSheet"
    />

    <!-- 骨架屏 -->
    <div class="container padding" v-if="loading">
      <div class="headerCard">
        <div class="left">
          <t-skeleton animation="gradient" theme="avatar" />
        </div>
        <div class="right">
          <t-skeleton
            :rowCol="[{ width: '100px' }, 2, 1]"
            theme="text"
            animation="gradient"
          ></t-skeleton>
        </div>
      </div>
    </div>

    <!-- 真正的内容 -->
    <div class="container padding" v-if="maincontent">
      <div class="headerCard">
        <div class="left">
          <t-avatar size="large">
            <template #icon>
              <UserIcon />
            </template>
          </t-avatar>
        </div>
        <div class="right">
          <div class="name">
            {{ name }}
          </div>
          <div class="tags">
            <t-tag>
              ID：{{ id }}
            </t-tag>
            <t-tag
              theme="primary"
              v-if="isAdmin"
            >
              管理员
            </t-tag>
          </div>
          
          <div class="saying">
            {{ saying }}
          </div>
        </div>
      </div>
    </div>

    <Panel follow="0" fans="0" money="0" />
  </div>
</template>

<style lang="less" scoped>
.headerCard {
  padding: 14px;
  padding-bottom: 0;
  display: flex;
  gap: 14px;
  clear: both;
}
.headerCard .right {
  width: 100%;
  clear: both;
  gap: 24px;
}

.headerCard .right .name {
  font-size: 20px;
}

.headerCard .right .tags {
  clear: both;
  width: 100%;
  display: flex;
  gap: 10px;
}

.usercenter {
  padding-bottom: 40px;
}

.usercenter .fab {
  position: fixed;
  z-index: 99999;
  transform: translateY(-40px);
}
</style>
