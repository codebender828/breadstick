import Breadstick from '../components/Breadstick'

/**
 * Breadstick plugin
 */
export default {
  install (Vue, options = {}) {
    Vue.prototype.$breadstick = new Breadstick()
  }
}
