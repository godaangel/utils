/**
 * 公共模块
 * @type {Object}
 */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
	// 出口文件配置
  output: {
    // 打包路径
    path: path.resolve(__dirname, '../dist'),
    // 打包文件名
    filename: 'index.js'
  },
  resolve: {
  	extensions: ['.ts', '.js', '.tsx'],
    alias: {
      '@': resolve('src'),
      'core': resolve('src/core')
    }
  }
};