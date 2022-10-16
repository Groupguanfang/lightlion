<script>
import { getUserPost } from "../../../api/User";
import { dropPost } from "../../../api/Home";

export default {
  data() {
    return {
      loading: "loading",
      data: [],
      showEmpty: false,
    };
  },
  async mounted() {
    let item = await getUserPost(localStorage.getItem("token"));
    // 判断是否为空
    if (item.data.data.length === 0) {
      this.showEmpty = true;
    }
    this.data = item.data.data;
    this.loading = "";
  },
  methods: {
    confirm(id) {
      this.$store.commit("UserDeleteDialog", id);
    },
  },
  watch: {
    async "$store.state.userCenter.id"() {
      this.loading = "loading";
      const del = await dropPost(
        this.$store.state.userCenter.id,
        localStorage.getItem("token")
      );
      this.$toast(del.data.message);

      let item = await getUserPost(localStorage.getItem("token"));
      // 判断是否为空
      if (item.data.data.length === 0) {
        this.showEmpty = true;
      }
      this.data = item.data.data;
      this.loading = "";
    },
  },
};
</script>

<template>
  <t-list class="post-list padding" :asyncLoading="loading">
    <div align="center" v-if="showEmpty">暂无文章</div>
    <t-swipe-cell
      style="border-radius: 6px"
      v-for="(item, index) in data"
      :key="index"
    >
      <t-cell
        @click="
          $router.push({
            path: '/usercenter/post/single',
            query: { id: item.id },
          })
        "
        :title="item.title"
        :description="item.description"
      >
        <template #rightIcon>
          <t-tag theme="success" v-if="item.status === 'publish'">已发布</t-tag>
          <t-tag theme="warning" v-else-if="item.status === 'draft'">
            草稿
          </t-tag>
          <t-tag theme="primary" v-else="item.status === 'check'">审核中</t-tag>
        </template>
      </t-cell>
      <template #right>
        <t-button
          @click.native="confirm(item.id)"
          style="border-top-right-radius: 6px;border-bottom-right-radius:6px"
          theme="danger"
          shape="square"
        >
          删除
        </t-button>
      </template>
    </t-swipe-cell>
  </t-list>
</template>

<style>
.post-list {
  width: 100%;
}
.post-list .t-cell__description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
