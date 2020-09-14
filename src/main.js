import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "@/routes"
import store from './store'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




import round from "vue-round-filter";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
  store,
  filters: {
    round
  }
    }).$mount('#app')
