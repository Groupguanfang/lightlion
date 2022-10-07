<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import empty from "../../utils/empty";
import { newDraft } from "../../api/Home";

export default {
  components: { MdEditor },
  data() {
    return {
      text: "",
      html: "",
      id: "",
      title: "",
    };
  },
  mounted() {
    if (empty(localStorage.getItem("token"))) {
      this.$router.push("/");
      this.$toast("登录状态已失效，请重新登录");
    }
  },
  methods: {
    getHtml(html) {
      this.html = html;
    },
    async saved() {
     try {
        const update = await newDraft(this.title,this.html,'open',localStorage.getItem('token'),'',this.id);
        console.log(update)
        this.$toast(update.data.message)
        if (update.data.code === 201)
        {
          this.id = update.data.data.insertId
        }
        
      } catch (error) {
        this.$toast(error)
      }
      
    },
  },
};
</script>

<template>
  <div class="newdraft">
    <t-navbar>新建草稿</t-navbar>
    <t-input v-model="title" placeholder="请输入文章标题" />
    <md-editor
      v-model="text"
      :noKatex="true"
      :toolbars="toolbars"
      @on-Html-changed="getHtml"
      @on-save="saved"
    />
  </div>
</template>
