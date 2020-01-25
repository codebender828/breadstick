---
Advanced Usage
---

# Advanced Usage

Whereas breadstick shines in making simple notifications for your Vue app, it's real strength is shown in allowing you to create custom notifications through it's render function callback.

This is particularly useful if you want use custom themed elements or Vue components inside of your toast notification. In the following snippet, we render a custom `Alert` component to display a toast notification.

This is particularly useful for building your own themed notification component library.

[Here are some examples](#) of how to use breadstick to render you own custom element.

## 🌮 With Vue's `render` function callback
Breadstick exposes Vue's `createElement` function in the render callback that you can use to render your own components in a toast notification. This can be useful in a context where Vue's `this` context may not be available.

In a Vue component, you can even use that component's `this.$createElement` to render your own element/component and return it in the render function callback so breadstick can display it.

```js
// Import your custom `Alert` component and render it in breadstick
import Alert from './components/Alert'

export default {
  mounted () {
    this.$breadstick.notify(({ h, onClose }) => {
      return h(Alert, {
        on: {
          click: onClose
        }
      }, 'A render function Alert notification')
    })
  }
}
```

## 🚚 With JSX
You can also use JSX if you like :).
```jsx
// Import your custom `Alert` component and render it in breadstick
import Alert from './components/Alert'

export default {
  mounted () {
    breadstick.notify(({ onClose }) => {
      return (
        <Alert onClick={onClose}>
          An JSX Alert notification
        </Alert>
      )
    }
  }
}
```