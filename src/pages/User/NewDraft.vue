<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import empty from "../../utils/empty";
import { newDraft } from "../../api/Home";
import http from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      text: "",
      html: "",
      id: "",
      title: "",
      tool: [
        'bold',
        'underline',
        'italic',
        'image',
        'save',
        '-',
        'strikeThrough',
        'title',
        'sub',
        'sup',
        'quote',
        'unorderedList',
        'orderedList',
        '-',
        'codeRow',
        'code',
        'link',
        'table',
        'mermaid',
        '-',
        'revoke',
        'next',
        '=',
        'pageFullscreen',
        'fullscreen',
        'preview',
        'htmlPreview',
        'catalog',
      ]
    };
  },
  mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/");
      this.$toast("登录状态已失效，请重新登录");
    }
  },
  methods: {
    // 获取html
    getHtml(html) {
      this.html = html;
    },
    //上图片
    async upload(files, callback) {
      const form = new FormData();
      form.append("avatar", files[0]);
      form.append("cookie", localStorage.getItem("token"));

      const uploadimg = await http.post(import.meta.env.VITE_APP_API_URL + "/singleUpload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          },
        }
      );
    this.$toast(uploadimg.data.message)
    callback(uploadimg.data.data)
    },
    // 保存内容
    async saved() {
      try {
        const update = await newDraft(
          this.title,
          this.html,
          "open",
          localStorage.getItem("token"),
          "",
          this.id
        );
        console.log(update);
        this.$toast(update.data.message);
        if (update.data.code === 201) {
          this.id = update.data.data.insertId;
        }
      } catch (error) {
        this.$toast(error);
      }
    },
  },
});
</script>

<template>
  <div class="newdraft">
    <t-navbar>新建草稿</t-navbar>
    <t-input v-model="title" placeholder="请输入文章标题" />
    <md-editor
      :toolbars="tool"
      v-model="text"
      :noKatex="true"
      @on-Html-changed="getHtml"
      @on-save="saved"
      @onUploadImg="upload"
    />
  </div>
</template>

<style>

</style>
