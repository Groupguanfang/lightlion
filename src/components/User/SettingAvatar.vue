<script>
export default {
  data() {
    return {
      add: import.meta.env.VITE_APP_API_URL + '/singleUpload',
      data: {'cookie':localStorage.getItem('token')}
    };
  },
  methods: {
    
  }
}
</script>

<template>
  <div class="set-avatar padding">
    <t-upload
      :action="add"
      :data="data"
    />
  </div>
</template>
