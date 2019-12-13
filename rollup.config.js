import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const name = 'Breadstick'
const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} Jonathan Bakebwa Mugaju
* @license MIT
*/`

const production = !process.env.ROLLUP_WATCH

// Externals
const externals = [
  ...Object.keys(pkg.peerDependencies || {})
]

const commons = {
  external: externals,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    cjs({
      include: /node_modules/
    }),
    scss({
      output: 'breadstick.css'
    }),
    production && terser()
  ]
}

/**
 * Configurations
 */
export default [
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        name,
        file: `dist/esm/index.js`,
        format: 'esm',
        exports: 'named'
      }
    ],
    ...commons
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        name,
        file: `dist/es/index.js`,
        format: 'es',
        exports: 'named'
      }
    ],
    ...commons
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        name,
        file: `dist/umd/index.js`,
        format: 'umd',
        exports: 'named'
      }
    ],
    ...commons
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner,
        name,
        file: `dist/cjs/index.js`,
        format: 'cjs',
        exports: 'named'
      }
    ],
    ...commons
  }
]
