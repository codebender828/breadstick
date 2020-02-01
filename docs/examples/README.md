---
  title: Using Breadstick
  name: Using Breadstick
---

## 🥳 Starters
Here are a few Codesandbox starters you can use to get started with Breadstick in your Vue or Nuxt App.
- **[Vue.js Starter](http://bit.ly/breadstick-vue)**
- **[Nuxt.js Starter](http://bit.ly/breadstick-nuxt)**

Breadstick can be used to render different types of notifications out of the box. You can render simple string notifications as well as custom styled notifications. This makes it really convenient.

## 🍊 Basic usage
Invoke a notification using the `notify` method to display a message to the user.
Breadstick defaults the notification duration to 5 seconds in the `top` position.

```js
this.$breadstick.notify('🥞 Show me the pancakes')
```

## 📚 Using different positions
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

## 🏠 Using custom element
With JSX or Vue's render function, breadstick is able to render a custom element or Vue component

```jsx
this.$breadstick.notify(
  <div>I am a custom HTML element</div>
)
```

## 📭 Close all notifications
You can clear all notifications by calling breadstick's `closeAll` method

```jsx
this.$breadstick.closeAll()
```