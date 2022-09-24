<script>
export default {
  methods: {
    }
  }
}
</script>

<template>
  <div class="home">
    <t-navbar
      @click-right="$store.commit('updateMenuStatus')"
      title=""
      :leftArrow="false"
    >
      <template #left>
        心电社区
      </template>
    </t-navbar>
  </div>
</template>