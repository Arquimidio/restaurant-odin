const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: "development",
 entry: './src/index.js',
 devServer: {
  static: "./dist"
 },
 output: {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, 'dist'),
  clean: true
 },
 optimization: {
   runtimeChunk: "single"
 },
 plugins: [
   new HtmlWebpackPlugin({
     title: "VegTopia",
     inject: "body"
   })
 ],
 module: {
  rules: [
    {
      test: /\.css/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(jpg|jpeg|png|svg|gif)/i,
      type: 'asset/resource'
    }
  ]
 }
}