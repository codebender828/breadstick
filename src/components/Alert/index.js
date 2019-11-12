export const Alert = {
  name: 'Alert',
  props: {
    id: String,
    title: String,
    onClose: Function
  },
  render (h) {
    return (
      <div id={this.id} className="Toaster__alert">
        {typeof title === 'string' ? (
          <div className="Toaster__alert_text">{this.title}</div>
        ) : (
          this.title
        )}

        {this.onClose && <Close onClose={this.onClose} />}
      </div>
    )
  }

}

export const Close = {
  name: 'Close',
  props: {
    onClose: {
      type: Function,
      default: () => null
    }
  },
  render (h) {
    return (
      <button
        className="Toaster__alert_close"
        type="button"
        aria-label="Close"
        onClick={this.onClose}
      >
        <span aria-hidden="true">×</span>
      </button>
    )
  }
}
