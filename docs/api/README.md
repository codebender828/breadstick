---
  title: API
---

## `notify(String|VNode|Function, options)` 
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

## Options
Option | Type | Default | Values
--- | --- | --- | --
`position` | `String` | `top` | `top`, `right`, `bottom`, `left`, `top-left`, `top-right`, `bottom-right`, `bottom-left`
`duration` | `Number` | 5000 | Any number in milliseconds


## `closeAll()`
 - Type: `Function`
The `closeAll` method closes all toast notifications that are visible in the UI at the time of invocation. Nice a succinct way to dismiss all notifications
