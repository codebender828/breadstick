<br />
<p align="center">
  <image src="https://res.cloudinary.com/xtellar/image/upload/v1573767816/breadstick/breadstick-logo_r6fnan.png" width="150px">
</p>
<h1 align="center">Breadstick</h1>
<h4 align="center">A simple but flexible implementation of toast style notifications for Vue.js.</h4>
<p align="center">🌟 Inspired by <a target="_blank" href="https://github.com/bmcmahen/toasted-notes">toasted-notes</a> for React - which I think is really cool. ❤️</p>

<h4 align="center"><a href="https://breadstick.netlify.com" target="_blank">Demo</a></h4>

### 🌟 Features
- **An imperative API.** This means that you don't need to set component state or render elements to trigger notifications. Instead, just call a function. This makes it very user friendly for component library authors.
- **Render whatever you want.** Utilize the render callback to create entirely custom notifications.
- **Functional default styles.** Import the provided css for some nice styling defaults or write your own styles.
- **JS agnostic notifications.** Breadstick can be incrementally adopted to your application since it uses the already progressive Vue.js under the hood.

## ⚡️ Installation
```bash
yarn install breadstick
or
npm install breadstick --save
```
You can then register `breadstick` as a plugin.

```js
import Vue from 'vue'
import Breadstick from 'breadstick'

Vue.use(Breadstick)

// You can now access the `breadstick` instance
// via `this.$breadstick` in your application.
```

You can also use breadstick's `breadstick` API without the plugin architecture. This is useful for building UI component libraries.

```js
import Breadstick from 'breadstick'
const breadstick = new Breadstick()

// You can now access the `breadstick` instance
// via `breadstick` in your application.
```

### 🎛 How it works
Simply import and create a new `breadstick` instance and call the `notify` method. Breadstick will expose a `render` function API that you can use to render custom notifications inside of breadstick. Alternatively you can also use plain JSX to call the notify method.

Rendering custom components inside of breadstick gives component library authors flexibility with styling of notifications. This works well with design systems too. The render function/JSX API exposes the exact same render function used inside of Vue templates so all other component options are accessible.

### 🤖Examples
Breadstick's API only works with Vue's render function or JSX API to render custom components inside of notifications.

#### 🍊 With basic string messsage
```js
this.$breadstick.notify('🥞 Show me the pancakes')

// With options:
this.$breadstick.notify('🥞 Show me the pancakes', {
  position: 'top' || 'bottom' || 'top-left' || 'top-right' || 'bottom-left' || 'bottom-right',
  duration: 8000 // Default is 5000
})
```

#### 🌮 With Vue's `render` function callback
```js
import Alert from './components/Alert'
import breadstick from 'breadstick'

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

#### 🚚 With JSX
```jsx
import Alert from './components/Alert'
import breadstick from 'breadstick'

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

### 🔖 To do:
- [x] Self implemented portal
- [x] Expose `toaster` API to client and render components by calling `toaster.notify`.
- [x] Implement animations API for toast entry/exit.
- [x] Clear notifications API
- [x] Docs
  - [ ] Setup Vuepress for documentation
  - [x] Netlify Demo
- [x] Publish to NPM

### 🦑 Contributors
- [Jonathan Bakebwa](https://twitter.com/codebender828)
- This could be you :)

#### 🤝 Contributing
Here's our contribution [guide.](./.github/CONTRIBUTING.md)

#### ❤️ Support this project
If you like this project, please consider supporting it by buying my a coffee!

<a style="background: #FF813F; color: white; padding: 10px 20px; border-radius: 3px; display: inline-flex;" target="_blank" href="https://www.buymeacoffee.com/dIlWof6x5">
  <img style="margin-right: 10px; height: 20px;" src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee">
  <span>Buy me a coffee</span>
</a>

<center>
  <br>
  Made with ❤️ by <a target="_blank" href="https://twitter.com/codebender828">Jonathan Bakebwa 🇺🇬</a>
</center>
