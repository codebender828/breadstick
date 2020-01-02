import Vue from 'vue'
import App from './App.vue'
// import { BreadstickBakery } from '../src/'
import { BreadstickBakery } from 'breadstick'

Vue.config.productionTip = false
Vue.use(BreadstickBakery)

new Vue({
  render: h => h(App)
}).$mount('#app')
