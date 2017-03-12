var webpack = require('webpack');

module.exports = {
  entry: './input.js',
  output: {
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}
