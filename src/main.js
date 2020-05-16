/*
  入口 JS
 */
import Vue from 'vue';
import App from './App';
import router from './router/index';

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,

})
