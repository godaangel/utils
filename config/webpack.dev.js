const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  // 入口文件配置
  entry: {
    main: './src/main.ts'
  },
  // 模块：例如解读css，图片如何转换压缩等
  module: {
    rules: [
      // ts支持
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // css解析
      {
        test: /\.css$/,
        use: [
          'style-loader', // 注意顺序  
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, // 在css中使用@import引入其他文件时，  
          'postcss-loader' // 不加importLoaders，postcss-loader不会操作引入的文件  
        ]
      },
      // less解析
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader' // 不用加importLoader，less-loader默认会有  
      },
      //babel 配置
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      // 文件解析
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: [{
          loader: 'url-loader'
        }]
      }
    ]
  },
  // 插件，用于生产模板和各项功能
  plugins: [
    // 自动生成html文件插件
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
  // 配置webpack开发服务
  devServer: {
    //设置基本目录结构,用于找到程序打包地址
    contentBase: path.resolve(__dirname, '../dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: process.env.PORT || 8080,
    disableHostCheck: true,
    proxy: {
      '/wau': {
        target: 'http://wii2app.wiiqq.com',
        changeOrigin: true
      },
    }
  }
});