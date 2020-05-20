🚀 A simple and flexible implementation of toast style notifications for Vue.js.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


<br />
<p align="center">
  <image src="https://res.cloudinary.com/xtellar/image/upload/v1573767816/breadstick/breadstick-logo_r6fnan.png" width="150px">
</p>
<h1 align="center">Breadstick</h1>
<h4 align="center">A simple and flexible implementation of toast style notifications for Vue.js.</h4>
<p align="center">🌟 Inspired by <a target="_blank" href="https://github.com/bmcmahen/toasted-notes">toasted-notes</a> for React - which I think is really cool. ❤️</p>

<h4 align="center"><a href="https://breadstick.now.sh/" target="_blank">Demo</a></h4>

### 🌟 Features
- **An imperative API.** This means that you don't need to set component state or render elements to trigger notifications. Instead, just call a function. This makes it very user friendly for component library authors.
- **Render whatever you want.** Utilize the render callback to create entirely custom notifications.
- **Functional default styles.** Import the provided css for some nice styling defaults or write your own styles.
- **JS agnostic notifications.** Breadstick can be incrementally adopted to your application since it uses the already progressive Vue.js under the hood.

## 📚 Table of Contents
- [📚 Table of Contents](#%f0%9f%93%9a-table-of-contents)
  - [🥳 Breadstick Starters](#%f0%9f%a5%b3-breadstick-starters)
  - [⚡️ Installation](#%e2%9a%a1%ef%b8%8f-installation)
    - [Installing with Nuxt](#installing-with-nuxt)
  - [🤖 Examples](#%f0%9f%a4%96-examples)
    - [🍊 Basic usage](#%f0%9f%8d%8a-basic-usage)
    - [📚 Using different positions](#%f0%9f%93%9a-using-different-positions)
    - [🏠 Using custom element](#%f0%9f%8f%a0-using-custom-element)
    - [📭 Close all notifications](#%f0%9f%93%ad-close-all-notifications)
  - [🏗 Advanced usage](#%f0%9f%8f%97-advanced-usage)
    - [🌮 With Vue's `render` function callback](#%f0%9f%8c%ae-with-vues-render-function-callback)
    - [🚚 With JSX](#%f0%9f%9a%9a-with-jsx)
- [💼 API](#%f0%9f%92%bc-api)
  - [`notify(String|VNode|Function, options)`](#notifystringvnodefunction-options)
    - [Options](#options)
  - [`closeAll()`](#closeall)
- [🔖 TODO:](#%f0%9f%94%96-todo)
- [🤝 Contributing](#%f0%9f%a4%9d-contributing)
- [❤️ Support this project](#%e2%9d%a4%ef%b8%8f-support-this-project)
- [Contributors ✨](#contributors-%e2%9c%a8)

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

// This exposes `this.$breadstick` in your Vue template.
Vue.use(BreadstickBakery)
```

#### Installing with Nuxt
After installing Breadstick, we import it and register it as a **client-side plugin**. This is because Breadstick it makes use of some DOM APIs. Code is similiar to the Vue plugin shown above.


<a id="examples"></a>

### 🤖 Examples
Breadstick can be used to render different types of notifications out of the box. You can render simple string notifications as well as custom styled notifications. This makes it really convenient.

<a id="basic-usage"></a>

#### 🍊 Basic usage
Invoke a notification using the `notify` method to display a message to the user.
Breadstick defaults the notification duration to 5 seconds in the `top` position.

```js
this.$breadstick.notify('🥞 Show me the pancakes')
```
<a id="different-positions"></a>

#### 📚 Using different positions
You can display notifications in different positions, including top-left, top, top-right, bottom-left, bottom, and bottom-right.

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

<a id="close-all"></a>

#### 📭 Close all notifications
You can clear all notifications by calling breadstick's `closeAll` method

```jsx
this.$breadstick.closeAll()
```

<a id="advanced"></a>

### 🏗 Advanced usage
Whereas breadstick shines in making simple notifications for your Vue app, it's real strength is shown in allowing you to create custom notifications through it's render function callback.

This is particularly useful if you want use custom themed elements or Vue components inside of your toast notification. In the following snippet, we render a custom `Alert` component to display a toast notification.

This is particularly useful for building your own themed notification component library.

[Here are some examples](#) of how to use breadstick to render you own custom element.

<a id="render-callback"></a>

#### 🌮 With Vue's `render` function callback
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

<a id="with-jsx"></a>

#### 🚚 With JSX
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

<a id="api"></a>

## 💼 API

<a id="notify"></a>

### `notify(String|VNode|Function, options)` 
 - **Arguments**
   - `{ String | VNode | Function }` Message
   - `{ Object }` options

Breadstick's `notify` method accepts two parameters. The first parameter can be a `String`, `VNode` (Object), or `Function` and the second is the options object.

If a string is passed in the first argument, breadstick will render a notificiation with the string in the top center position with it's default internal component.
```js
this.$breadstick.notify('Simple notification.')
```

If a `VNode` is passed, Breadstick treats it like a rendered component and renders it instead.
```jsx
this.$breadstick.notify(
  <div>I am a custom HTML element</div>
)
```

If a callback `Function` is passed in the first argument, it will expose an object with two parameters: `h` and the `onClose` which are both functions. Using a render callback allows you to tap into the close function. It's your best option if you want to completely re-style your toast notification

```js
this.$breadstick.notify(({ h, onClose }) => {
  return h('div', 'My custom notification')
})
```
<a href="options"></a>

#### Options
Option | Type | Default | Values
--- | --- | --- | --
`position` | `String` | `top` | `top`, `right`, `bottom`, `left`, `top-left`, `top-right`, `bottom-right`, `bottom-left`
`duration` | `Number` | 5000 | Any number in milliseconds

<a id="close-all"></a>

### `closeAll()`
 - Type: `Function`
The `closeAll` method closes all toast notifications that are visible in the UI at the time of invocation. Nice a succinct way to dismiss all notifications

<a id="todo"></a>

## 🔖 TODO:
Breadstick still has a few more features coming up. These include:
- [ ] Indefinitely display toast notification
- [ ] Allow sharing of same application Vue instance.

<a id="contributing"></a>

## 🤝 Contributing
Here's our contribution [guide.](./.github/CONTRIBUTING.md)

<a id="support"></a>

## ❤️ Support this project
If you like this project, please consider supporting it by buying my a coffee!

<a target="_blank" href="https://www.buymeacoffee.com/dIlWof6x5">
  <img width="200px" src="https://res.cloudinary.com/xtellar/image/upload/v1584764609/jbakebwa.dev/sponsorships/buy-me-a-coffee.png" alt="Buy me a coffee">
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
