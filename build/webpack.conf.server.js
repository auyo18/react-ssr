const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  target: "node",
  mode: 'development',
  entry: ['@babel/polyfill', './src/server/index.js'],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, '../bundle')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'isomorphic-style-loader',
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
