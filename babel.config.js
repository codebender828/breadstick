module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset',
  //   ['@babel/preset-env', { 'modules': false }]
  // ],
  // 'plugins': ['@babel/external-helpers', 'transform-class-properties']
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-proposal-class-properties'
  ]
}
