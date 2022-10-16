<script>
import http from "axios";
import MdEditor from "md-editor-v3";
import { defineComponent } from "vue";
import { newDraft } from "../../api/Home";
import empty from "../../utils/empty";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  components: { MdEditor },
  data() {
    return {
      saveButtonDisabled: false,
      text: "",
      html: "",
      id: "",
      title: "",
      tool: [
        "revoke",
        "next",
        "-",
        "bold",
        "underline",
        "italic",
        "image",
        "-",
        "strikeThrough",
        "title",
        "sub",
        "sup",
        "quote",
        "unorderedList",
        "orderedList",
        "-",
        "codeRow",
        "code",
        "link",
        "table",
        "=",
        "pageFullscreen",
        "fullscreen",
        "preview",
        "htmlPreview",
        "catalog",
      ],
    };
  },
  mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/");
      this.$toast("登录状态已失效，请重新登录");
    }

    // 修复移动端无法点击上传按钮的问题
    document
      .querySelector(".md-toolbar-item[title='图片']")
      .addEventListener("click", () => {
        document
          .querySelector(".md-dropdown")
          .classList.remove("md-dropdown-hidden");
      });
    document
      .querySelector(".md-toolbar-item[title='标题']")
      .addEventListener("click", () => {
        document
          .querySelector(".md-dropdown")[1]
          .classList.remove("md-dropdown-hidden");
      });
    document
      .querySelector(".md-toolbar-item[title='表格']")
      .addEventListener("click", () => {
        document
          .querySelector(".md-dropdown")[2]
          .classList.remove("md-dropdown-hidden");
      });
  },
  methods: {
    // 获取html
    getHtml(html) {
      this.html = html;
    },
    //上图片
    upload(files, callback) {
      const form = new FormData();
      form.append("avatar", files[0]);
      form.append("cookie", localStorage.getItem("token"));

      http
        .post(import.meta.env.VITE_APP_API_URL + "/singleUpload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          callback(res.data.data);
          this.$toast(res.data.message);
        });
    },
    // 保存内容
    async saved() {
      this.saveButtonDisabled = true;
      try {
        const update = await newDraft(
          this.title,
          this.html,
          "open",
          localStorage.getItem("token"),
          "",
          this.id
        );
        this.$toast(update.data.message);
        if (update.data.code === 201) {
          this.id = update.data.data.insertId;
        }
      } catch (error) {
        this.$toast(error);
      }
      this.saveButtonDisabled = false;
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
      @onUploadImg="upload"
    />
    <div class="options padding">
      <t-button
        :disabled="saveButtonDisabled"
        :loading="saveButtonDisabled"
        block
        theme="primary"
        @click="saved()"
      >
        保存为草稿
      </t-button>
    </div>
  </div>
</template>

<style></style>
