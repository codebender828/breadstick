---
  title: Getting Started
---

## :speaking_head: Introduction
Breadstick is a simple and flexible implementation of toast style notifications for Vue.js. 

_🌟 Inspired by [toasted-notes](https://github.com/bmcmahen/toasted-notes) for React - which I think is really cool. ❤️_

## Demo
See a live [demo](https://breadstick.now.sh/) of breadstick

## ⚡️ Installation
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
