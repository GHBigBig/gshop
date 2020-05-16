import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Order from '../pages/Order/Order'
import Person from '../pages/Person/Person'
import Login from '../pages/Login/Login'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      },
    }
  ]
})
