---
  title: Getting Started
---
# Getting Started

## :speaking_head: Introduction
Breadstick is a simple but flexible implementation of toast style notifications for Vue.js. 🌟 Inspired by [toasted-notes](https://github.com/bmcmahen/toasted-notes) for React - which I think is really cool. ❤️

See a live [demo](https://breadstick.now.sh/) of breadstick

## :construction_worker_man: Installation

Install ```breadstick``` and its peer dependency, ```animejs```, using yarn or npm.

``` bash
  npm install breadstick --save
```

Or

``` bash
  yarn add breadstick
```
You can then register ```breadstick``` as a plugin.

``` js
  import Vue from 'vue'
  import { BreadstickBakery } from 'breadstick'
  import 'breadstick/dist/breadstick.css'

  Vue.use(BreadstickBakery)
  // You can now access the `breadstick` instance
  // via `this.$breadstick` in your application.
```

By default, ```breadstick``` exports a class instance API you can use without the plugin architecture. This is useful for building UI component libraries.

``` js
  import Breadstick from 'breadstick'
  import 'breadstick/dist/breadstick.css'

  const breadstick = new Breadstick()

  // You can now access the `breadstick` instance
  // via `breadstick` in your application.
```

## 🎛 How it works

Simply import and create a new ```breadstick``` instance and call the notify method. Breadstick will expose a render function API that you can use to render custom notifications inside of ```breadstick```. Alternatively you can also use plain JSX to call the notify method.

Rendering custom components inside of breadstick gives component library authors flexibility with styling of notifications. This works well with design systems too. The render function/JSX API exposes the exact same render function used inside of Vue templates so all other component options are accessible.