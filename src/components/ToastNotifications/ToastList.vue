<template>
  <div class="notification-list">
    <div v-for="notification in allNotifications" :key=notification.id>
      <ToastMessage :id=notification.id :title=notification.title :text=notification.text />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToastMessage from './ToastMessage';
export default {
  name: "ToastList",
  components: {
    ToastMessage,
  },
  computed: mapGetters(['allNotifications']),
}
</script>

<style scoped>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>