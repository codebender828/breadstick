/**
 * Alert component
 */
const Alert = {
  name: 'Alert',
  render (h) {
    return h('h2', this.$slots.default)
  }
}

export default Alert
