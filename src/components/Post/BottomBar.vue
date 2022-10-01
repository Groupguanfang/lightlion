<script>
import { ChevronLeftIcon } from "tdesign-icons-vue-next";
export default {
  components: { ChevronLeftIcon },
};
</script>

<template>
  <div class="post-bottombar">
    <div class="item">
      <ChevronLeftIcon @click="$router.go(-1)" style="font-size: 24px" />
    </div>
    <div class="item">
      <t-input disabled type="text" placeholder="评论未开放" />
    </div>
  </div>
</template>

<style>
.post-bottombar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3em;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0 0 10px #88888852;
}
.post-bottombar .t-input {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  background: #eee;
}
</style>
