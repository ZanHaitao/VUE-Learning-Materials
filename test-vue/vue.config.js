// const { config } = require("vue/types/umd");
const path = require('path')

module.exports = {
  // 生成Map文件
  productionSourceMap: process.env.NODE_ENV !== "production",

  // outputDir: './aaa' // 设置输出文件地址
  // publicPath: 'www.baidu.com' //设置路径
  // assetsDir: 'assets',
  chainWebpack: config => {
    config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
  },

  configureWebpack: {
    module: {
      rules: [
        // { test: /\.less$/, use: ['less-loader'] },
      ]
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/public.less')
      ]
    }
  }
}
