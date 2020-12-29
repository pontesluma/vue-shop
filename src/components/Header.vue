<template>
  <div class="container">
    <h1>Vue Shop</h1>
    <div class="actions">
      <router-link to='/'>Home</router-link>
      <router-link to='/cart'>
        Cart
        <div v-if="cartQuantity !== 0" class="flag">{{cartQuantity}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Header',
  computed: mapGetters(["cartQuantity"]),
}
</script>

<style scoped>
.container {
  padding: 20px 50px;
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 1px 0px 15px rgba(0,0,0,0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.flag {
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;

  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -8px;
  top: -2px;
}

a {
  text-decoration: none;
  font-size: 18px;
  background-color: white;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  padding: 5px 15px;
  border-radius: 8px;
  margin-right: 20px;

  position: relative;

  transition: transform ease-in-out 0.2s;
}

a:hover {
  transform: translateY(-2px);
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: fit-content;
}

</style>