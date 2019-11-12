export function isVueComponent (target) {
  return target &&
    (
      typeof target.render === 'function' ||
      typeof target.template === 'string'
    )
}
