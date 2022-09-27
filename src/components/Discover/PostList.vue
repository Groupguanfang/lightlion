/<script>
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
    <t-list>
      <t-cell v-for="item in post" :key="item">
        <router-link :to='"post/' + item.id">
          <span class="cell">
            {{ item.title }}
          </span>
        </router-link>
      </t-cell>
    </t-list>
  </div>
</template>
