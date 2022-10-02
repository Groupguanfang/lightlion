<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import empty from "../../utils/empty";

export default {
  components: { MdEditor },
  data() {
    return {
      text: "",
      html: ""
    }
  },
  mounted() {
    if (empty(localStorage.getItem('token'))) {
      this.$router.push("/")
      this.$toast("登录状态已失效，请重新登录")
    }
  },
  methods: {
    getHtml(html) {
      this.html = html
    },
    saved(params) {
      this.$toast(params)
    }
  }
}
</script>

<template>
  <div class="newdraft">
    <t-navbar>新建草稿</t-navbar>
    <md-editor
      v-model="text"
      :noKatex="true"
      :toolbars="toolbars"
      @on-Html-changed="getHtml"
      @on-save="saved"
    />

    <div>
      raw数据：
      {{ text }}
    </div>
    <div>
      html数据：
      {{ html }}
    </div>
  </div>
</template>
