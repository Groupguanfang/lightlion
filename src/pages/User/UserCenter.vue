<script>
import { getInfo } from "../../api/User";
import TabBar from "../../components/TabBar.vue";
import { UserIcon } from "tdesign-icons-vue-next";
import Panel from "../../components/User/Panel.vue";
export default {
  components: { TabBar, UserIcon, Panel },
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
  async created() {
    try {
      const info = await getInfo(localStorage.getItem("token"));
      this.userInfo = info.data;
      this.loading = false;
      this.maincontent = true;
    } catch (err) {
      this.$toast(err);
    }
  },
  methods: {
    handleSelected(selected, selectedIndex) {
      if (selectedIndex === 0) {
        this.$toast("已登出");
      }
    },
  },
};
</script>

<template>
  <div class="usercenter">
    <t-navbar @click-right="showActionSheet = true">用户中心</t-navbar>
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
</style>