<template>
  <md-editor v-model="text" @onChange="onChange" @onUploadImg="onUploadImg" />
</template>

<script>
import { defineComponent } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

export default defineComponent({
  name: "App",
  components: {
    MdEditor,
  },
  data() {
    return {
      text: "# 这是标题",
    };
  },
  methods: {
    onChange(val) {},
    onUploadImg(files) {
      console.log(Array.from(files));
    },
  },
});
</script>