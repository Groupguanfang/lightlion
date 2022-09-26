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
    let postdata = await getPost().data
    this.post = postdata
    console.log(this.post)
  }
}
</script>

<template>
  <div class="post-list">
    <t-list>
      <t-cell v-for="(item,index) in post">
        {{ item.title }}
      </t-cell>
    </t-list>
  </div>
</template>
