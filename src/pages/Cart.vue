<template>
  <div class="container">
    <h3>Cart</h3>
    <div class="cart-container" v-if="formattedData.length > 0">
     <div class="cart-item" v-for="item in formattedData" :key="item.id">
       <img
        :src=item.img
        :alt=item.name
       />
       <div class="info">
        <span><strong>{{item.quantity}}x</strong> {{item.name}}</span>
        <span>{{item.price}}</span>
       </div>
       <button  class="rm-to-cart" @click="removeItem(item.id)" type="button">Tirar do carrinho</button>
     </div>
    </div>
    <div>
      <h3>Total: {{cartTotalPrice}}</h3>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Cart",
  methods: mapActions(['removeItem']),
  computed: {
    ...mapGetters(['allCartItems', 'cartTotalPrice']),
    formattedData(){
      if (!this.allCartItems) return []

      const moneyFormat = (num) => {
        let [i, d] = String(num.toFixed(2)).split('.');

        if (!d || d.length === 0) d = '00';
        if (d.length === 1) d = d + '0';

        return `R$ ${i},${d}`;

      };

      if (this.allCartItems.length === 0) return [];


      return this.allCartItems.map(item => {
        return {
          ...item,
          price: moneyFormat(item.price * item.quantity)
        }
      })
    }
  }  
}
</script>

<style scoped>
.container {
  padding: 20px 200px;
}
.cart-container {
  padding: 50px 0;
}

.cart-item {
  padding: 10px 50px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.3);


  display: flex;
  align-items: center;

  margin-bottom: 30px;

}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 50px;
}

.info span{
  margin-top: 10px;
}

.rm-to-cart {
  border: none;
  padding: 8px;
  background-color: red;
  color: white;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: auto;
  cursor: pointer;
  outline: none;

  transition: transform ease-in-out 0.2s;
  
}

.rm-to-cart:hover {
  transform: translateY(-2px);
}

</style>