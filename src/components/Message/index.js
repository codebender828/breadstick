// import Vue from 'vue'
import { isVueComponent } from '../../utils/validators'
import { Alert } from '../Alert'
// import { Motion } from 'vue-motion'

const Message = {
  name: 'Message',
  props: {
    id: {
      type: Number,
      default: null
    },
    message: {
      type: [String, Function],
      default: null
    },
    position: {
      type: String
    },
    onRequestRemove: {
      type: Function,
      default: () => null
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
      localShow: false
    }
  },
  methods: {
    close () {
      this.localShow = false
    },
    renderMessage (h) {
      if (typeof this.message === 'string' || isVueComponent(this.message)) {
        return <Alert id={this.id} title={this.message} onClose={this.close} />
      }
      if (typeof this.message === 'function') {
        const message = this.message(h, {
          id: this.id,
          onClose: this.close
        })
        return message
      }

      return null
    }
  },
  render (h) {
    // const self = this
    return this.renderMessage(h)
    // return h(Motion, {
    //   props: {
    //     value: 200,
    //     tag: 'div'
    //   },
    //   scopedSlots: {
    //     default: function (props) {
    //       return h('span', {
    //         style: {
    //           transform: `translateX(${props.value}px)`
    //         }
    //       }, [self.renderMessage()])
    //     }
    //   }
    // })
    // return (
    //   <Motion value={200} tag="div">
    //     <span slot-scope={props} style={{ transform: `translateX(${props.value}px)` }}>
    //       {this.renderMessage(h)}
    //     </span>
    //   </Motion>
    // )
  }
}

export default Message
