<template>
  <div id="app">
    <Header/>
    <div class="route-content">
      <router-view />
    </div>
    <ToastList />
  </div>
</template>

<script>
import ToastList from './components/ToastNotifications/ToastList';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    ToastList
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
