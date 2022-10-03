c
<script>
import { getInfo, logOut } from "../../api/User";
import TabBar from "../../components/TabBar.vue";
import { UserIcon } from "tdesign-icons-vue-next";
import Panel from "../../components/User/Panel.vue";
import { AddIcon } from "tdesign-icons-vue-next";
export default {
  components: { TabBar, UserIcon, Panel, AddIcon },
  data() {
    return {
      loading: true,
      maincontent: false,
      userInfo: {
        userdata: { id: "", name: "", avatar: "", saying: "" },
        profile: { id: "", level: "", today: "", phone: "" },
      },
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
      ],
    };
  },
  async mounted() {
    try {
      const info = await getInfo(localStorage.getItem("token"));

      if (info.code !== 500) {
        this.userInfo = info.data;
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
        this.$router.push('/usercenter/settings')
      }
    },
  },
};
</script>

<template>
  <div class="usercenter">
    <t-navbar :leftArrow="false" @click-right="showActionSheet = true">
      用户中心
    </t-navbar>
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
          <div class="name">{{ userInfo.userdata.name }}</div>
          <div class="tags" theme="primary">ID：{{ userInfo.userdata.id }}</div>
          <div class="saying">
            {{ userInfo.userdata.saying }}
          </div>
        </div>
      </div>
    </div>

    <Panel follow="0" fans="0" money="0" />
  </div>
</template>

<style scoped>
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
}

.headerCard .right .name {
  font-size: 20px;
}

.headerCard .right .tags {
  clear: both;
  width: 100%;
}
.usercenter .fab {
  position: fixed;
  transform: translateY(-40px);
}
</style>
