<template>
  <div class="container">
    <h3>Products</h3>
    <div class="product-container">
      <div class="product" v-for="item in formattedData" :key="item.id">
        <img
          :src=item.img
          :alt=item.name
        >
        <div class="info">
          <span class="name">{{item.name}}</span>
          <span class="price">{{item.price}}</span>
        </div>
        <button @click="addToCart(item.id)" type="button" class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import api from '../services/api';


export default {
  name: "Products",
  methods: {
    ...mapActions(['addItem']),
    addToCart(id) {

      const item = this.items.find(product => product.id === id)

      const newItem ={
        ...item,
        quantity: 1,
      };
      this.addItem(newItem);
    }
  },
  created() {
    api.get('product').then(response => this.items = response.data);
  },
  data: () => {
    return {
      items: [],
    };
  },
  computed:{
  formattedData(){
    if (!this.items) return []

    const moneyFormat = (num) => {
      let [i, d] = String(num).split('.');
      
      if (d.length === 0) d = '00';
      if (d.length === 1) d = d + '0';

      return `R$ ${i},${d}`;

    };

    return this.items.map(item => {
      return {
        ...item,
        price: moneyFormat(item.price)
      }
    })
  }
},
}
</script>

<style scoped>
.container {
  padding: 20px 200px;
}

.product-container {
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
}

.product {
  padding: 30px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.4);
  width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;

}

.name {
  font-size: 24px;
}

.add-to-cart {
  border: none;
  padding: 8px;
  background-color: red;
  color: white;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;

  transition: transform ease-in-out 0.2s;
  
}

.add-to-cart:hover {
  transform: translateY(-2px);
}
</style>