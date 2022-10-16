<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { newDraft, getPostItem } from "../../api/Home";
import { tools, fixEditor } from "../../utils/editor";

export default {
  components: { MdEditor },
  data() {
    return {
      data: "",
      tool: tools,
    };
  },
  async mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/");
      this.$toast("登录状态已失效，请重新登录");
    }
    fixEditor();
    const data = await getPostItem(this.$route.query.id);
    console.log(data);
  },
};
</script>

<template>
  <div class="editpost">
    <t-navbar>编辑文章</t-navbar>
    <t-input placeholder="请输入文章标题"></t-input>
    <MdEditor v-model="data" :toolbars="tool" />
  </div>
</template>
