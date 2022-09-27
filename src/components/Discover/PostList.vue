<script>
import axios from "../../utils/axios";
import { getPost } from "../../api/Home";
export default {
  data() {
    return {
      post: []
    }
  },
  async mounted() {
    let postdata = await getPost()
    this.post = postdata.data
    console.log(this.post)
  }
}
</script>

<template>
  <div class="post-list">
  <!--
    <t-list>
      <t-cell v-for="(item,index) in post" :key="index">
      {{ item.title }}
      </t-cell>
    </t-list>
  -->
  <t-list>
    <t-cell v-for="item in post" :key="item">
      <span class="cell">{{ item.title }}</span>
    </t-cell>
  </t-list>
  </div>
</template>
