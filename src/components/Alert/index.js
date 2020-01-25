import './styles.css'

export const Alert = {
  name: 'Alert',
  props: {
    id: [String, Number],
    title: [String, Object],
    close: Function,
    clear: Function,
    reset: Function
  },
  render (h) {
    return h('span', {
      class: ['Breadstick__alert'],
      attrs: {
        id: this.id
      },
      on: {
        mouseenter: this.clear,
        mouseleave: this.reset
      }
    }, [
      typeof title === 'string'
        ? h('div', {
          class: ['Breadstick__alert_text']
        }, this.title) : this.title,
      !this.title && this.$slots.default,
      this.close && h(Close, {
        props: {
          close: this.close
        }
      })
    ])
  }

}

export const Close = {
  name: 'Close',
  props: {
    close: {
      type: Function,
      default: () => null
    }
  },
  render (h) {
    return h('button', {
      class: ['Breadstick__alert_close'],
      attrs: {
        type: 'button',
        'aria-label': this.close
      },
      on: {
        click: this.close
      }
    }, [h('span', { attrs: { 'aria-hidden': true } }, '×')])
  }
}
