import Toaster from '../components/Breadstick'
const breadstick = new Toaster()

/**
 * Breadstick plugin
 */
export default {
  install (Vue, options = {}) {
    Vue.prototype.$breadstick = breadstick
  }
}
