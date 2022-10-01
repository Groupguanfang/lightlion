<script>
import PostList from "../components/Discover/PostList.vue";
import TabBar from "../components/TabBar.vue";
export default {
  components: { TabBar, PostList },
};
</script>

<template>
  <div class="discover">
    <div class="padding">
      <h1>发现</h1>
    </div>
    <PostList />
    <TabBar />
  </div>
</template>
