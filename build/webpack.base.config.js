// webpack.config

const path = require('path');
// 处理html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 处理vue文件的loader
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const EslintWebpackPlugin = require('eslint-webpack-plugin');
// const webpack = require('webpack');

const { title } = require('../setting');
module.exports = {
  name: title, // 网站名称
  mode: 'development', // 环境模式 development开发 production 生产
  resolve: {
    // 这里可以把一些常用的路径重写，方便页面引入
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@asset': path.resolve(__dirname, '../src/asset'),
      '@layout': path.resolve(__dirname, '../src/components/Layout'),
      '@common': path.resolve(__dirname, '../src/components/Common'),
      '@view': path.resolve(__dirname, '../src/view'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@global': path.resolve(__dirname, '../'),
    },
  },
  entry: path.resolve(__dirname, '../src/main.js'), //webpack的入口文件
  // 这里面主要配置各种loader，来处理不同后缀的文件例如 .vue .less
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'scss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'], // 处理es6语法
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      {
        test: /\.jpe?g|png|gif|svg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 30720,
            esModule: false, // 关闭不然不正确
            outputPath: 'images',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 以哪个html为模版
      filename: 'index.html', // 打包后的文件名
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      // 复制public下的资源到webpack打包输出目录
      patterns: [
        {
          from: 'public/favicon.ico',
          to: 'favicon.ico',
        },
      ],
    }),
    // new EslintWebpackPlugin({
    //   fix: true,
    // }),
    // DefinePlugin插件的作用是为process.env中注入环境变量
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     A_B: JSON.stringify('ab')
    //   },
    // }),
  ],
};
