const path = require('path')
const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Home page",
      filename: "index.html",
      template: "./src/template/index.html"
    }),
    new HTMLWebpackPlugin({
      title: "About page",
      filename: 'about.html',
      template: "./src/template/about.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  },
})