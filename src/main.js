import Vue from 'vue'
import App from './App.vue'
import Breadstick from './plugin'

Vue.config.productionTip = false

Vue.use(Breadstick)

new Vue({
  render: h => h(App)
}).$mount('#app')
