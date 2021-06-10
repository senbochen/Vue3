// eslint-disable-next-line import/no-unresolved
const path = require('path')

// eslint-disable-next-line space-before-function-paren
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  publicPath: './',
  chainWebpack: (config) => {
    config.module.rule('eslint').rule('js')
      .include
      .add(`${__dirname}packages`)
      .end().use('babel')
      .loader('babel-loader')
    config.resolve.alias.set('@', resolve('src')).set('@api', resolve('api'))
  },
}
