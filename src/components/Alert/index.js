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
  render () {
    const clear = this.clear
    const reset = this.reset
    return (
      <span id={this.id} vOn:mouseenter={clear} vOn:mouseleave={reset} class="Breadstick__alert">
        {typeof title === 'string' ? (
          <div class="Breadstick__alert_text">{this.title}</div>
        ) : (
          this.title
        )}
        {!this.title && this.$slots.default}
        {this.close && <Close close={this.close} />}
      </span>
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
