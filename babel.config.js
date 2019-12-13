module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { 'modules': false }]
  ],
  'plugins': ['@babel/external-helpers', 'transform-class-properties']
}
