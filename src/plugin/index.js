import Breadstick from '../components/Breadstick'
const breadstick = new Breadstick()

/**
 * Breadstick plugin
 */
export default {
  install (Vue, options = {}) {
    Vue.prototype.$breadstick = breadstick
  }
}
