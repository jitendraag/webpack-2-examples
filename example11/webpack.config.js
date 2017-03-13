var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './input.js',
    vendor: './second.js'
  },
  output: {
    path: './dist',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 40000 // File less than 40kb gets included as data URL. Bigger files use file-loader as fallback.
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("output-style.css"),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor']
    })
  ]
}
