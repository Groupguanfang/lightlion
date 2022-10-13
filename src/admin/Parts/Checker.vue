<script>
import {getChecker} from "../../api/Admin"
export default {
  data() {
    return {
      dat: []
    }
  },
  async mounted() {
    const list = await getChecker()
    this.dat = list.data.data
  }
}
</script>

<template>
  <t-list class="post-list">
    <t-cell v-for="(item,index) in dat" :key="index" :title="item.title" :description="item.data">
    </t-cell>
    
    <div class="padding" v-if="dat.length === 0">
      暂无任何待审事项(^-^)
    </div>
  </t-list>
</template>

<style scoped>
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
