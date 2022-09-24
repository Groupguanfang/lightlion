<script>
export default {
  data() {
    return {
      openBase: false,
      menuItems: [
        {
          title: "首页",
          key: "/",
        },
        {
          title: "腕上B站",
          key: "/bilibili",
        },
        {
          title: "腕上资讯",
          key: "/news",
        },
        {
          title: "腕上小说",
          key: "/novel",
        },
        {
          title: "腕上樱花",
          key: "/animation",
        },
      ],
      // 跳转方法
      itemClick: (index, item, context) => {
        this.$router.push(item.key);
      },
    };
  },
  watch: {
    "$store.state.isMenuOpen"() {
      if (this.$store.state.isMenuOpen) {
        this.openBase = true;
      } else {
        this.openBase = false;
      }
    },
  },
};
</script>

<template>
  <t-drawer
    @item-click="itemClick"
    v-model:visible="openBase"
    placement="left"
    :items="menuItems"
  />
</template>
