<script>
import MdEditor from "md-editor-v3";
import TurnMarkDown from "turndown";
import "md-editor-v3/lib/style.css";
import empty from "../../utils/empty";
import { newDraft, getPostItem } from "../../api/Home";
import { tools, fixEditor } from "../../utils/editor";

export default {
  components: { MdEditor },
  data() {
    return {
      data: "",
      title: "",
      tool: tools,
      id: null,
      saveDisabled: true,
      html: "",
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
    const constructMarkDown = new TurnMarkDown();
    this.data = constructMarkDown.turndown(data.data.data);
    this.title = data.data.title;
    this.id = data.data.id;
    this.saveDisabled = false;
  },
  methods: {
    getHtml(html) {
      this.html = html;
    },
    async saved() {
      this.saveDisabled = true;
      const save = await newDraft(
        this.title,
        this.html,
        "open",
        localStorage.getItem("token"),
        "",
        this.id
      );
      console.log(save);
      this.$toast({
        theme: "success",
        message: save.data.message,
      });
      this.saveDisabled = false;
    },
  },
};
</script>

<template>
  <div class="editpost">
    <t-navbar>编辑文章</t-navbar>
    <t-input v-model="title" placeholder="请输入文章标题" />
    <MdEditor
      :noKatex="true"
      @on-Html-changed="getHtml"
      v-model="data"
      :toolbars="tool"
    />
    <div class="padding">
      <t-button
        :disabled="saveDisabled"
        :loading="saveDisabled"
        block
        theme="primary"
        @click="saved()"
      >
        保存
      </t-button>
    </div>
  </div>
</template>
