<template>
  <div class="group">
    <div class="mes" v-for="(i, index) in dat" :key="index">{{ i.data }}</div>
  </div>
  <div class="p">
    <t-input v-model="v" />
    <t-button @click="sendAction()">发送</t-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dat: [],
      conn: new WebSocket(
        "wss://p9g4i6-3003.preview.csb.app/chat?cookie=fc5683277d9c1936592b7b1c09b3007d"
      ),
      v: "",
    };
  },
  mounted() {
    this.conn.addEventListener("message", (data) => {
      this.dat.push(data);
      console.log(data);
    });
  },
  methods: {
    sendAction() {
      let data = `{"type":"message","data":"${this.v}"}`;
      let front = { type: "message", data: this.v };
      this.conn.send(data);
      this.dat.push(front);
    },
  },
};
</script>
