const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  mode: 'development',
  entry: ['@babel/polyfill', './src/client/index.js'],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, '../bundle')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
})

module.exports = config
