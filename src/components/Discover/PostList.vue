<script>
import axios from "../../utils/axios";
import { getPost } from "../../api/Home";
export default {
  data() {
    return {
      post: [],
      loading: true,
    };
  },
  async mounted() {
    let postdata = await getPost();
    this.post = postdata.data;
    console.log(this.post);
    this.loading = false;
  },
  methods: {
    go(id) {
      this.$router.push("/post/" + id);
    },
  },
};
</script>

<template>
  <div class="post-list">
    <t-loading theme="dots" v-if="loading" />
    <t-list>
      <t-cell
        v-for="item in post"
        @click="go(item.id)"
        :key="item"
        :title="item.title"
        :description="item.data"
      >
      </t-cell>
    </t-list>
  </div>
</template>

<style>
.post-list {
  display: flex;
  justify-content: center;
}
.post-list .t-cell__description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.post-list .t-cell__title {
  font-size: 18px;
}
</style>