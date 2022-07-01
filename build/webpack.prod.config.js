const {merge} = require("webpack-merge")
const baseConfig = require("./webpack.base.config")
const path = require("path")

// 先清除dist包里面之前打包生成的文件
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname,"../dist/static"),
    filename: "js/[name].[chunkhash].js"
  },
  plugins: [
    new CleanWebpackPlugin(), // 每次打包前清除上一次打包的文件，以及缓存
  ]
})