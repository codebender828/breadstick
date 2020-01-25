module.exports = {
  transform: {
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: [
    '**/src/**/*.test.(js|jsx|ts|tsx)'
  ]
}
