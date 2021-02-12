import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'
import SlimDialog from 'v-slim-dialog';
import Vuelidate from 'vuelidate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'v-slim-dialog/dist/v-slim-dialog.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'nprogress/nprogress.css';
import 'nprogress/nprogress.js';
import fontawesome from 'fontawesome';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(SlimDialog)
Vue.use(axios)
new Vue({
  fontawesome,
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
