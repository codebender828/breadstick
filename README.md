<br />
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<p align="center">
  <image src="https://res.cloudinary.com/xtellar/image/upload/v1573767816/breadstick/breadstick-logo_r6fnan.png" width="150px">
</p>
<h1 align="center">Breadstick</h1>
<h4 align="center">A simple but flexible implementation of toast style notifications for Vue.js.</h4>
<p align="center">🌟 Inspired by <a target="_blank" href="https://github.com/bmcmahen/toasted-notes">toasted-notes</a> for React - which I think is really cool. ❤️</p>

<h4 align="center"><a href="https://breadstick.now.sh/" target="_blank">Demo</a></h4>

### 🌟 Features
- **An imperative API.** This means that you don't need to set component state or render elements to trigger notifications. Instead, just call a function. This makes it very user friendly for component library authors.
- **Render whatever you want.** Utilize the render callback to create entirely custom notifications.
- **Functional default styles.** Import the provided css for some nice styling defaults or write your own styles.
- **JS agnostic notifications.** Breadstick can be incrementally adopted to your application since it uses the already progressive Vue.js under the hood.

### 🥳 Getting Started
Here are a few Codesandbox starters you can use to get started with Breadstick in your Vue or Nuxt App.
- **Vue.js Starter**: http://bit.ly/breadstick-vue
- **Nuxt.js Starter**: http://bit.ly/breadstick-nuxt

## ⚡️ Installation
Install `breadstick` and its peer dependency, `animejs`, using yarn or npm.
```bash
npm install breadstick --save
```
You can then register `breadstick` as a plugin.
```js
import Vue from 'vue'
import { BreadstickBakery } from 'breadstick'

Vue.use(BreadstickBakery)
// You can now access the `breadstick` instance
// via `this.$breadstick` in your application.
```

By default, breadstick exports a class instance API you can use without the plugin architecture. This is useful for building UI component libraries.

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

### 🔖 TODO:
Breadstick still has a few more features coming up. These include:
- [x] Nuxt Server-side rendering support
- [x] Replace peer dependency `animate-velocity` with `anime.js` for animations. Size benefits i.e `22KB -> 6KB`
- [ ] Allow sharing of same application Vue instance.
- [ ] Passing in values for position.
- [ ] Replace internal portal with `PortalVue`
- [ ] Create docs site with Vuepress


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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://bit.ly/becomeworldclass"><img src="https://avatars0.githubusercontent.com/u/24433274?v=4" width="100px;" alt=""/><br /><sub><b>Omereshone Kelvin Oghenerhoro</b></sub></a><br /><a href="https://github.com/codebender828/breadstick/commits?author=DominusKelvin" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!