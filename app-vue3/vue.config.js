/*
 * @Author: shanyu
 * @Date: 2022-03-20 14:40:16
 * @LastEditTime: 2022-03-23 19:38:19
 * @LastEditors: shanyu
 * @Description: 
 */
const packageName = require('./package.json').name;
module.exports = {
  publicPath: '/',
  configureWebpack: {
    output: {
      // 必须打包出一个库文件
      library: `${packageName}-[name]`,
      // 库的格式必须是 umd
      libraryTarget: 'umd',
    }
  },
  devServer: {
    port: 3001,
    headers:{
      'Access-Control-Allow-Origin': '*' // 允许跨域
    }
  },
  productionSourceMap: false,
  css: {
    extract: true
  }
};
