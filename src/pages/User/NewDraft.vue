<script>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
export default {
  conponents: { MdEditor },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<template>
  <div class="newdraft">
    <t-navbar>新建草稿</t-navbar>
    <md-editor v-model="text" />
  </div>
</template>
