<template>
  <div class="message-container">
    <button @click="rmNotification(id)" class="close-btn">x</button>
    <div class="content">
      <strong>{{title}}</strong>
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ToastMessage",
  props: ['title', 'text', 'id'],
  data() {
    return {
      timeout: null,
    };
  },
  methods: mapActions(['rmNotification']),
  created() {
    this.timeout = setTimeout(() => {
      this.rmNotification(this.id);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  }
}
</script>

<style scoped>

.message-container {
  background-color: rgb(87, 142, 204);
  border-radius: 12px;
  width: 320px;
  min-height: 70px;
  margin-bottom: 15px;
  padding: 10px;
  height: fit-content;

  position: relative;
}

.content {
  color: aliceblue;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.close-btn {
  color: aliceblue;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;

  position: absolute;
  top: -6px;
  right: 0;
  margin: 10px;

  cursor: pointer;
  outline: none;
}

.content strong {
  color: inherit;
  margin-bottom: 8px;
}
.content span {
  color: inherit;
}
</style>