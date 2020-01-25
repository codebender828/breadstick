import { Alert } from '../Alert/'

/**
 * Message component
 */
const Message = {
  name: 'Message',
  props: {
    id: {
      type: Number,
      default: null
    },
    message: {
      type: [String, Function, Object],
      default: null
    },
    position: {
      type: String
    },
    requestClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      timeout: undefined
    }
  },
  mounted () {
    this.createTimeout()
  },
  methods: {
    close () {
      this.$emit('remove', { id: this.id, position: this.position })
      clearTimeout(this.timeout)
    },
    onMouseEnter () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
    },
    onMouseLeave () {
      this.createTimeout()
    },
    createTimeout () {
      this.timeout = setTimeout(this.close, this.duration)
      return this.timeout
    },
    renderMessage (h) {
      // The returned message is a string
      if (typeof this.message === 'string') {
        return h(Alert, {
          attrs: {
            id: this.id
          },
          props: {
            clear: this.onMouseEnter,
            reset: this.onMouseLeave,
            title: this.message,
            close: this.close
          }
        }, this.message)
      }

      // The returned message is a function with Vue's render function callback
      if (typeof this.message === 'function') {
        const message = this.message({
          h,
          id: this.id,
          onClose: this.close
        })
        return h('span', {
          on: {
            mouseenter: this.onMouseEnter,
            mouseleave: this.onMouseLeave
          }
        }, [message])
      }

      // The returned message is a component VNode
      if (this.message.constructor && this.message.constructor.name === 'VNode') {
        return h('span', {
          on: {
            'mouseenter': this.onMouseEnter,
            'mouseleave': this.onMouseLeave
          }
        }, [this.message])
      }
      return null
    }
  },
  render (h) {
    return h('span', {
    }, [this.renderMessage(h)])
  }
}

export default Message
