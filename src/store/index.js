import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import notification from './modules/notification';

Vue.use(Vuex);

const store = new Vuex.Store({ modules: {
  cart,
  notification,
} });

export default store;