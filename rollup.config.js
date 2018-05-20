// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import multiEntry from "rollup-plugin-multi-entry";

export default {
  entry: [
    'scripts/compare-images',
    'scripts/add-campaign',
    'scripts/open-broser',
    'scripts/get-testing-url',
  ],
  dest: [
    'build/compare-images.min.js',
    'build/add-campaign.min.js',
    'build/open-broser.min.js',
    'build/get-testing-url.min.js',
  ],
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    multiEntry({ exports: false }),
  ],
};
