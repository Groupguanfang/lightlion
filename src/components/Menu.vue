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
      ],
      itemClick: (index, item, context) => {
        this.$router.push(item.key);
      },
    };
  },
  methods: {
    clickAction(index, item) {
      console.log(index);
    },
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
