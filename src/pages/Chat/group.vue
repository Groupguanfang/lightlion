<template>
  <div class="group">
    <div class='mes' v-for="(i,index) in data" :key="index">{{i.data}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  moed() {
    const url = 'wss://p9g4i6-3003.preview.csb.app/chat?cookie=aac0097bfbea57880b850be7abeff5af'
    const conn = new WebSocket(url)
    console.log(conn)
    conn.onmessage = (mes) => {
      if (mes.type === 'message') {
        this.data.push(mes)
      }
    }
  }
}
</script>
