// var webpack = require('webpack')
// var path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/public/build`,
    filename: 'bundle.js',
    //sourceMapFileName: `${__dirname}/public/build/bundle.map`
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/,
      }
    ]
  }
}