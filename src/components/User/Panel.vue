<script>
export default {
  props: ["follow", "fans", "money"],
};
</script>

<template>
  <div class="panel">
    <div class="info padding">
      <div class="data-container">
        <div class="item">
          <div class="data">{{ follow }}</div>
          <div class="title">关注</div>
        </div>
        <div class="item">
          <div class="data">{{ fans }}</div>
          <div class="title">粉丝</div>
        </div>
        <div class="item">
          <div class="data">{{ money }}</div>
          <div class="title">积分</div>
        </div>
      </div>
    </div>

    <t-tabs class="personal" default-value="post">
      <t-tab-panel value="post" label="我的文章"> 没有文章 </t-tab-panel>
      <t-tab-panel value="follow" label="我的关注"> 没有关注 </t-tab-panel>
    </t-tabs>
  </div>
</template>

<style scoped>
.info {
  padding-top: 0;
}
.data-container {
  padding: 14px;
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  margin-left: 14px;
  margin-right: 14px;
  background: #eee;
}
.data-container .item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data-container .item .title {
  font-size: 14px;
  color: #888;
}
.data-container .item .data {
  font-size: 18px;
}
.personal .t-tabs__panel {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  color: #888;
}
</style>