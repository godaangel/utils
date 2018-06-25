const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const uglify = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // 入口文件配置
  entry: {
    main: './src/pack.ts'
  },
  // 模块：例如解读css，图片如何转换压缩等
  module: {
    rules: [
      // ts支持
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'ts-loader',
        }],
        exclude: /node_modules/
      }
    ]
  },
  // 插件，用于生产模板和各项功能
  plugins: [
    //js压缩插件
    new uglify()
  ]
});