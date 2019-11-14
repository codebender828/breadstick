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
      default: 30000
    }
  },
  methods: {
    close () {
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
        return (
          <Alert id={this.id} title={this.message} close={this.close}>
            {this.message}
          </Alert>
        )
      }

      // The returned message is a function with Vue's render function callback
      if (typeof this.message === 'function') {
        const message = this.message({
          h,
          id: this.id,
          onClose: this.close
        })
        return message
      }

      // The returned message is a component VNode
      if (this.message.constructor && this.message.constructor.name === 'VNode') {
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
