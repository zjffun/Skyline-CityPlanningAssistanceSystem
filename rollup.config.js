import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/rollup.js',
  output: {
    name: "CPAS",
    file: 'dist/skyline.cpas.js',
    format: 'iife'
  },
  plugins: [ resolve() ]
}