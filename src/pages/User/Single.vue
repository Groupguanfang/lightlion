<script>
import { getPostItem, dropPost } from "../../api/Home";
export default {
  data() {
    return {
      title: "加载中",
      data: "加载中",
      status: null,
      navBarText: "文章管理",
      id: null,
      dialog: {
        show: false,
      },
    };
  },
  methods: {
    confirm() {
      this.dialog.show = true;
    },
    async onConfirm() {
      await dropPost(this.id, localStorage.getItem("token"));
      this.$router.push("/usercenter");
    },
  },
  async mounted() {
    document.querySelector("#root").addEventListener("scroll", () => {
      if (document.querySelector("#root").scrollTop > 150) {
        this.navBarText = this.title;
      } else {
        this.navBarText = "文章管理";
      }
    });
    const single = await getPostItem(this.$route.query.id);
    console.log(single);
    this.title = single.data.title;
    this.data = single.data.data;
    this.id = single.data.id;
    this.status = single.data.status;
  },
};
</script>

<template>
  <div class="user-post-single">
    <t-navbar :rightShow="false">{{ navBarText }}</t-navbar>
    <t-dialog
      v-model:visible="dialog.show"
      title="删除"
      content="确认删除？"
      cancelBtn="取消"
      :confirmBtn="{ content: '删除', theme: 'danger' }"
      @confirm="onConfirm"
    >
    </t-dialog>
    <div class="operation-container">
      <t-cell :title="title">
        <template #rightIcon>
          <t-tag theme="success" v-if="status === 'publish'">已发布</t-tag>
          <t-tag theme="warning" v-else-if="status === 'draft'"> 草稿 </t-tag>
          <t-tag theme="primary" v-else="status === 'check'">审核中</t-tag>
        </template>
      </t-cell>
      <div class="operation">
        <t-button
          shape="square"
          @click="
            $router.push({
              path: '/usercenter/post/edit',
              query: { id },
            })
          "
          block
        >
          编辑文章
        </t-button>
        <t-button shape="square" block theme="primary">发布文章</t-button>
        <t-button @click="confirm()" shape="square" block theme="danger">
          删除文章
        </t-button>
      </div>
    </div>

    <h1 class="padding title">{{ title }}</h1>
    <main class="padding" v-html="data"></main>
  </div>
</template>

<style scoped lang="less">
.t-navbar {
    box-shadow: 0px -12px 20px 0px #888;
    position: fixed;
    top: 0;
    width: 100%;
}
.title {
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 1.4em;
}
main {
    margin-bottom: 5em;
}
.operation-container {
    position: fixed;
    width: 100%;
    bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: -2px 8px 20px 0px #888;
    .t-cell {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
}
.operation {
    display: flex;
    .t-button {
        border-radius: 0
    }
}
</style>
