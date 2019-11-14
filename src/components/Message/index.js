import Alert from '../Alert'

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
      default: 30000
    }
  },
  data () {
    return {
      localShow: true
    }
  },
  methods: {
    close () {
      this.localShow = false
      this.$emit('remove', { id: this.id, position: this.position })
    },
    onMouseEnter () {
      setTimeout(null)
    },
    onMouseLeave () {
      setTimeout(this.duration)
    },
    renderMessage (h) {
      // The returned message is a string
      if (typeof this.message === 'string') {
        console.log('STRING')
        return (
          <Alert id={this.id} title={this.message} onClose={this.close}>
            {this.message}
          </Alert>
        )
      }

      // The returned message is a function with Vue's render function callback
      if (typeof this.message === 'function') {
        console.log('FUNCTION')
        const message = this.message({
          h,
          id: this.id,
          onClose: this.close
        })
        return message
      }

      // The returned message is a object with render callback
      if (typeof this.message === 'object' && typeof this.message.render === 'function') {
        console.log('OBJECT')
        return this.message.render({
          h,
          id: this.id,
          onClose: this.close
        })
      }

      // The returned message is a component VNode
      if (this.message.constructor && this.message.constructor.name === 'VNode') {
        console.log('VNODE')
        return this.message
      }
      return null
    }
  },
  render (h) {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.renderMessage(h)}
      </div>
    )
  }
}
export default Message
