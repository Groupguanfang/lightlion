<script>
import http from "axios";
import MdEditor from "md-editor-v3";
import { defineComponent } from "vue";
import { newDraft } from "../../api/Home";
import { tools, fixEditor } from "../../utils/editor";
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
      tool: tools,
    };
  },
  mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/");
      this.$toast("登录状态已失效，请重新登录");
    }

    fixEditor();
  },
  methods: {
    // 获取html
    getHtml(html) {
      this.html = html;
    },
    //上图片
    upload(files) {
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
          this.text = this.text + `  ![图片描述](${res.data.data})`;
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
