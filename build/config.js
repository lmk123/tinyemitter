const path = require('path')
const typescript = require('rollup-plugin-typescript2')
const pkg = require('../package.json')

module.exports = {
  input: path.resolve(__dirname, '../src/index.ts'),
  name: 'TinyEmitter',
  tp: typescript({
    useTsconfigDeclarationDir: true
  }),
  esOutputPath: path.resolve(__dirname, '../dist/tinyemitter.esm.js'),
  cjsOutputPath: path.resolve(__dirname, '../dist/tinyemitter.common.js'),
  umdOutputPath: path.resolve(__dirname, '../dist/tinyemitter.js'),
  umdMinOutputPath: path.resolve(__dirname, '../dist/tinyemitter.min.js'),
  banner: [
    '/*!',
    ' * tinyemitter.js v' + pkg.version,
    ' * https://github.com/lmk123/tinyemitter',
    ' * Released under the MIT License.',
    ' */'
  ].join('\n')
}
