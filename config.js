import multiEntry from 'rollup-plugin-multi-entry';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  dest: 'extensions/chrome/hoard.js',
  format: 'iife',
  moduleName: 'hoard',
  plugins: [ babel() ]
};