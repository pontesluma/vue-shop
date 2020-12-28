import Vue from 'vue';
import Router from 'vue-router';

import Products from '@/pages/Products';
import Cart from '@/pages/Cart';

Vue.use(Router);

const routes = [
  {
    name: 'Products',
    path: '/',
    component: Products,
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart,
  }
];

const router = new Router({routes});

export default router;