---
  title: Using Breadstick
---
# 🤖 Using Breadstick

Breadstick's API only works with Vue's render function or JSX API to render custom components inside of notifications.

## 🍊 With basic string messsage

``` js
  this.$breadstick.notify('🥞 Show me the pancakes')

  // With options:
  this.$breadstick.notify('🥞 Show me the pancakes', {
    position: 'top' || 'bottom' || 'top-left' || 'top-right' || 'bottom-left' || 'bottom-right',
    duration: 8000 // Default is 5000
  })
```

## 🌮 With Vue's render function callback

``` js
  import Alert from './components/Alert'

export default {
  name: 'app',
  mounted () {
    // Breadstick renders your custom `Alert` component
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

``` js
  import Alert from './components/Alert'

export default {
  name: 'app',
  mounted () {
    const showAlert = () => alert('Hello!')
    // Breadstick renders your custom `Alert` component
    breadstick.notify(({ onClose }) => {
      return (
        <Alert onClick={onClose}>
          An JSX Alert notification
        </Alert>
      )
    }
  }
```