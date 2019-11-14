/**
 * Alert component
 */
const Alert = {
  name: 'Alert',
  render (h) {
    return h('div', this.$slots.default)
  }
}

export default Alert
