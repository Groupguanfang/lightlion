<script>
import { ViewList } from "tdesign-icons-vue-next";
export default {
  components: { ViewList }
}
</script>

<template>
  <div class="home">
    <t-navbar>
      心电社区
      <template #right>
        <view-list></view-list>
      </template>
    </t-navbar>
  </div>
</template>