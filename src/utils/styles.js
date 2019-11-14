const directions = {
  x: ['left', 'right'],
  y: ['top', 'bottom']
}

/**
 * @description Splits space/tab separated string into array and cleans empty string items.
 * @param {String} value String
 */
export const split = (value) => {
  if (typeof value !== 'string') {
    return []
  }

  return value.split(/\s+/gi).filter(v => v)
}

/**
 * @description Cleans and transforms string of format "x y" into object {x, y}.
 * Possible combinations:
 *   x - left, center, right
 *   y - top, bottom
 */
export const listToDirection = (value) => {
  console.log({ value })
  if (typeof value === 'string') {
    value = split(value)
  }

  let x = null
  let y = null

  Object.keys(value).forEach(v => {
    directions.y.forEach(direction => {
      if (direction.includes(v)) y = v
    })

    directions.x.forEach(direction => {
      if (direction.includes(v)) x = v
    })
  })
  console.log({ x, y })
  return { x, y }
}
