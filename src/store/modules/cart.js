import Vue from 'vue';

const state = {
  cart: [],
};

const getters = {
  allCartItems: state => state.cart,
  cartQuantity: (state) => {
    const qntt = state.cart.reduce((total, item) => total + item.quantity, 0);
    return qntt;
  },
  cartTotalPrice: (state) => {
    const price = state.cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    const moneyFormat = (num) => {
      let [i, d] = String(num.toFixed(2)).split('.');
      
      if (!d || d.length === 0) d = '00';
      if (d.length === 1) d = d + '0';

      return `R$ ${i},${d}`;

    };
    return moneyFormat(price);
  },
};

const actions = {
  addItem: ({ commit, dispatch }, item) => {
    dispatch('addNotification', { title: item.name, text: 'Item was added to your cart!' }, {root:true});
    commit('newItem', item);
  },
  removeItem: ({ commit }, itemId) => commit('removeItem', itemId),
};

const mutations = {
  newItem: (state, item) => {
    const itemInCart = state.cart.findIndex(cartItem => cartItem.id === item.id );

    if(itemInCart !== -1) {
      Vue.set(state.cart, itemInCart, {...state.cart[itemInCart], quantity: state.cart[itemInCart].quantity + 1 });
    } else {
      state.cart.unshift(item);
    }
  },
  removeItem: (state, itemId) => {
    const index = state.cart.findIndex(item => item.id === itemId);
    const quantity = state.cart[index].quantity;

    if(quantity > 1) {
      Vue.set(state.cart, index, {...state.cart[index], quantity: state.cart[index].quantity - 1 });
    } else {
      state.cart = state.cart.filter(item => item.id !== itemId);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}