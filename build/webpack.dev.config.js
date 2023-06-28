const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config.js');
const Dotenv = require('dotenv-webpack');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map', // 用于生成souce调试代码，不同类型会产生不同的结果
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包后输出到的文件
    filename: 'js/[name].js', // 打包文件的输出名称
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development'), // 指定要加载的环境文件
    }),
  ],
  devServer: {
    // 配置热更新的本地服务器
    static: {
      directory: path.join(__dirname, '../dist"'),
    },
    open: true, //自动打开浏览器
    hot: true, //启用热更新
    host: 'localhost',
    port: 9890,
  },
});
