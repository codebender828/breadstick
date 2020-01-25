import anime from 'animejs'
import Message from '../Message'

const positions = {
  top: [],
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  bottom: [],
  'bottom-right': []
}

/**
 * @description Compute styles for specific position
 * @param {String} position
 * @returns {Object} Styles object
 */
const computeBreadstickStyle = (position) => {
  let style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  if (position.includes('right')) {
    style.alignItems = 'flex-end'
  } else if (position.includes('left')) {
    style.alignItems = 'flex-start'
  }

  return style
}

/**
 * Breadstick Animations
 */
const animations = {
  enter: (el) => {
    var height = el.clientHeight
    return {
      height: [0, height],
      opacity: [0, 1],
      scale: [0.9, 1]
    }
  },
  leave: {
    height: 0,
    opacity: [1, 0],
    scale: [1, 0.9]
  }
}

/**
 * Breadstick component
 */
const BreadstickManager = {
  name: 'BreadstickManager',
  data () {
    return {
      idCounter: 0,
      positions
    }
  },
  props: {
    notify: Function,
    default: () => null
  },
  created () {
    this.notify(this._notify, this.closeAll)
  },
  methods: {
    /**
     * @description Creates toast state for single toast notification
     * @param {Object|Vue.Component|String} message
     * @param {Object} options
     * @returns {Object} Toast state object
     */
    createToastState (message, options) {
      const id = ++this.idCounter
      // a bit messy, but object.position returns a number because
      // it's a method argument.
      const position =
        options.hasOwnProperty('position') && typeof options.position === 'string'
          ? options.position
          : 'top'

      return {
        id,
        message,
        position,
        showing: true,
        duration:
          typeof options.duration === 'undefined' ? 5000 : options.duration,
        onRequestRemove: () => this.removeToast(String(id), position),
        type: options.type
      }
    },

    /**
     * @description Shows notification
     * @param {Object|Vue.Component|String} message
     * @param {Object} options
     */
    _notify (message, options) {
      const toast = this.createToastState(message, options)
      const { position } = toast

      // prepend the toast for toasts positioned at the top of
      // the screen, otherwise append it.
      const isTop = position.includes('top')
      isTop ? this.positions[position].unshift(toast)
        : this.positions[position].push(toast)
    },

    /**
     * @description Close all toast components
     */
    closeAll () {
      Object.keys(this.positions).forEach((pos) => {
        const position = this.positions[pos]
        position.forEach((toast) => {
          this.removeToast(toast.id, pos)
        })
      })
    },

    /**
     * @description Remove toast from position list
     * @param {String} id
     * @param {String} position
     */
    removeToast (id, position) {
      this.positions[position] = this.positions[position].filter(toast => toast.id !== id)
      return this.positions[position]
    },

    /**
    * @description Compute styles for  toast component
    * @param {String} position
    */
    getStyle (position) {
      let style = {
        width: 'fit-content',
        position: 'fixed',
        zIndex: 5500
      }

      if (position === 'top' || position === 'bottom') {
        style.margin = '0 auto'
        style.textAlign = 'center'
      }

      if (position.includes('top')) {
        style.top = 0
      }

      if (position.includes('bottom')) {
        style.bottom = 0
      }

      if (!position.includes('left')) {
        style.right = 0
      }

      if (!position.includes('right')) {
        style.left = 0
      }
      return style
    },
    /**
     * @description Get animation for transition
     * @param {String} key Type of animation phase
     * @param {HTMLElement} el Element
     */
    getAnimation (key, el) {
      const animation = animations[key]
      return typeof animation === 'function'
        ? animation.call(this, el)
        : animation
    },
    /**
     * @description Calls enter animation
     * @param {{el: HTMLElement, complete: Function}} el
     */
    enter (el, complete) {
      const animation = this.getAnimation('enter', el)
      anime({
        targets: el,
        ...animation,
        complete,
        easing: 'spring(1, 100, 50, 0)'
      })
    },
    /**
     * @description Calls leave animation
     * @param {{el: HTMLElement, complete: Function}} el
     */
    leave (el, complete) {
      let animation = this.getAnimation('leave', el)
      anime({
        targets: el,
        ...animation,
        complete,
        easing: 'spring(1, 100, 70, 0)'
      })
    }
  },
  render (h) {
    return h('span', [
      Object.keys(this.positions).map((position) => {
        const pos = position
        const toasts = this.positions[pos]
        return h('TransitionGroup', {
          style: this.getStyle(pos),
          props: {
            css: false
          },
          on: {
            enter: this.enter,
            leave: this.leave
          },
          key: position,
          class: ['Breadstick__manager-' + pos],
          ref: `BreadstickManager_${pos}`
        }, [
          toasts.map((toast) => {
            return h(Message, {
              props: {
                position: pos,
                key: toast.id,
                message: toast.message,
                ...toast
              },
              style: {
                ...computeBreadstickStyle(pos)
              },
              on: {
                remove: ({ id, position }) => {
                  this.removeToast(id, position)
                }
              },
              key: toast.id
            }, this.$slots.default)
          })
        ])
      })
    ])
  }
}

export default BreadstickManager
