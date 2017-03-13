var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './input.js',
    vendor: './second.js'
  },
  resolve: {
    extensions: ['.js']
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
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]' // A path relative to dist can be added here
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      sourceMap: true
    })
  ]
}
