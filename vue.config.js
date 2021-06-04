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
  },
}
