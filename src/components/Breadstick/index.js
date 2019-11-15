import Vue from 'vue'
import BreadstickManager from '../BreadstickManager'

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'
const PORTAL_ID = 'breadstick-toast'
const VM = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
/**
 * @description Create Toast Portal
 * @returns {HTMLElement}
 */
function createPortal () {
  if (!isBrowser) {
    return
  }

  let portalElement
  const existingPortalElement = document.getElementById(PORTAL_ID)

  if (existingPortalElement) {
    portalElement = existingPortalElement
  } else {
    const el = document.createElement('div')
    el.id = PORTAL_ID
    el.className = 'Toaster'
    if (document.body != null) {
      document.body.appendChild(el)
    }
    portalElement = el
  }

  return portalElement
}

/**
 * Breadstick component
 */
export const Breadstick = {
  name: 'Breadstick',
  render (h) {
    return h('span', this.$slots.default)
  }
}

function createBreadstick (boundNotify) {
  new VM({
    el: `#${PORTAL_ID}`,
    render (h) {
      return h(BreadstickManager, {
        props: {
          notify: boundNotify
        }
      }, this.$slots.default)
    }
  }).$mount()
}

/**
 * Toaster returns breadstick instance
 */
class Toaster {
  constructor () {
    createPortal()
    createBreadstick(this.bindNotify)
  }

  closeAll = () => {
    if (this.removeAll) {
      this.removeAll()
    }
  };

  bindNotify = (fn, removeAll) => {
    this.createNotification = fn
    this.removeAll = removeAll
  };

  /**
   * @description Calls notification method
   * @param {Function|String} Message object
   * @param {Object} options
   */
  notify = (message, options = {}) => {
    if (this.createNotification) {
      this.createNotification(message, options)
    }
  };
}

export default Toaster
