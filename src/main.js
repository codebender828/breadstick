import Vue from 'vue'
import App from './App.vue'
import { BreadstickBakery } from '../src/'

Vue.config.productionTip = false
Vue.use(BreadstickBakery)

new Vue({
  render: h => h(App)
}).$mount('#app')
