import './styles.css'

export const Alert = {
  name: 'Alert',
  props: {
    id: [String, Number],
    title: String,
    close: Function
  },
  render () {
    return (
      <div id={this.id} class="Breadstick__alert">
        {typeof title === 'string' ? (
          <div class="Breadstick__alert_text">{this.title}</div>
        ) : (
          this.title
        )}
        {!this.title && this.$slots.default}
        <Close close={this.close} />
      </div>
    )
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
  render () {
    return (
      <button
        class="Breadstick__alert_close"
        type="button"
        aria-label="Close"
        onClick={this.close}
      >
        <span aria-hidden="true">×</span>
      </button>
    )
  }
}
