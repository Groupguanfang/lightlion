<script>
import { getUserPost } from "../../../api/User";
export default {
  data() {
    return {
      loading: 'loading',
      data: []
    }
  },
  async mounted() {
    const item = await getUserPost(localStorage.getItem('token'))
    this.data = item.data.data
    this.loading = ''
  },
}
</script>

<template>
  <t-list :asyncLoading="loading">
    <t-cell v-for="(item,index) in data" :key="index" :title="item.title">
      <template #rightIcon>
        <t-tag theme="success" v-if="item.status === 'publish'">已发布</t-tag>
        <t-tag theme="warning" v-else-if="item.status === 'draft'">草稿</t-tag>
        <t-tag theme="primary" v-else="item.status === 'check'">审核中</t-tag>
      </template>
    </t-cell>
  </t-list>
</template>
