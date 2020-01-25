
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<br />
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

## 📚 Table of Contents
- [Installation](#installation)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Using different positions](#different-positions)
- [Advanced Usage](#advanced)

### 🥳 Breadstick Starters
Here are a few Codesandbox starters you can use to get started with Breadstick in your Vue or Nuxt App.
- **Vue.js Starter**: http://bit.ly/breadstick-vue
- **Nuxt.js Starter**: http://bit.ly/breadstick-nuxt

<a id="installation"></a>
### ⚡️ Installation
Install `breadstick` and its peer dependency, `animejs`, using yarn or npm.

```bash
npm install breadstick animejs --save
```
You can then register `BreadstickBakery` as a Vue plugin.
```js
import Vue from 'vue'
import { BreadstickBakery } from 'breadstick'
import "breadstick/dist/breadstick.css";

// This exposes `this.$breadstick` in your Vue template.
Vue.use(BreadstickBakery)
```


<a id="examples"></a>

### 🤖 Examples
Breadstick can be used to render different types of notifications out of the box. You can render simple string notifications as well as custom styled notifications. This makes it really convenient 

<a id="basic-usage"></a>

#### 🍊 Basic usage
Invoke a notification using the `notify` method to display a message to the user.
Breadstick defaults the notification duration to 5 seconds in the `top` position.

```js
this.$breadstick.notify('🥞 Show me the pancakes')
```
<a id="different-positions"></a>

#### 📚 Using different positions
```js
[
  'top-left', 
  'top', 
  'top-right', 
  'bottom-left', 
  'bottom', 
  'bottom-right'
].forEach(position => {
  this.$breadstick.notify("Using position " + position, {
    position
  })
})
```

<a id="custom-notifications"></a>

#### 🏠 Using custom element
With JSX or Vue's render function, breadstick is able to render a custom element or Vue component

```jsx
this.$breadstick.notify(
  <div>I am a custom HTML element</div>
)
```

<a id="advanced"></a>

### 🏗 Advanced usage
Whereas breadstick shines in making simple notifications for your Vue app, it's real strength is shown in allowing you to create custom notifications through it's render function callback.

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
- [ ] Indefinitely display toast notification
- [ ] Allow sharing of same application Vue instance.

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
    <td align="center"><a href="https://jbakebwa.dev"><img src="https://avatars2.githubusercontent.com/u/21237954?v=4" width="100px;" alt=""/><br /><sub><b>Jonathan Bakebwa</b></sub></a><br /><a href="https://github.com/codebender828/breadstick/commits?author=codebender828" title="Code">💻</a> <a href="https://github.com/codebender828/breadstick/commits?author=codebender828" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bit.ly/becomeworldclass"><img src="https://avatars0.githubusercontent.com/u/24433274?v=4" width="100px;" alt=""/><br /><sub><b>Omereshone Kelvin Oghenerhoro</b></sub></a><br /><a href="https://github.com/codebender828/breadstick/commits?author=DominusKelvin" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
