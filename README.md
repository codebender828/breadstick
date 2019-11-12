<br />
<h1 align="center">🥖 Breadstick</h1>
<h4 align="center">A simple but flexible implementation of toast style notifications for Vue.js</h4>

### 🌟 Features
- **An imperative API.** This means that you don't need to set component state or render elements to trigger notifications. Instead, just call a function. This makes it very user friendly for component library authors.
- **Render whatever you want.** Utilize the render callback to create entirely custom notifications.
- **Functional default styles.** Import the provided css for some nice styling defaults or write your own styles.

### 🎛 How it works
Simply import and create a new `breadstick` instance and call the `notify` method. Breadstick will expose a `render` function API that you can use to render custom notifications inside of breadstick. Alternatively you can also use plain JSX to call the notify method.

Rendering custom components inside of breadstick gives component library authors flexibility with styling of notifications. This works well with design systems too. The render function/JSX API exposes the exact same render function used inside of Vue templates so all other component options are accessible.

### 🤖Examples
Breadstick's API only works with Vue's render function or JSX API to render custom components inside of notifications.

#### 🌮 With Render function
```js
import Alert from './components/Alert'
import breadstick from 'breadstick'

export default {
  name: 'app',
  mounted () {
    const showAlert = () => alert('Hello!')
    // Breadstick renders your custom `Alert` component
    breadstick.notify((h, { onClose = true }) => {
      return h(Alert, {
        on: {
          click: showAlert
        }
      }, 'A render function Alert notification')
    })
  }
}
```

#### With JSX
```jsx
import Alert from './components/Alert'
import breadstick from 'breadstick'

export default {
  name: 'app',
  mounted () {
    const showAlert = () => alert('Hello!')
    // Breadstick renders your custom `Alert` component
    breadstick.notify(() => {
      return (
        <Alert onClick={showAlert}>
          An JSX Alert notification
        </Alert>
      )
  }
}
```

### 🔖 To do:
- [x] Self implemented portal
- [x] Expose `toaster` API to client and render components by calling `toaster.notify`.
- [ ] Implement animations API for toast entry/exit.
- [ ] Clear notifications API
- [ ] Docs
- [ ] Publish to NPM