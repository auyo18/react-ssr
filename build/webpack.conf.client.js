const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, '../bundle')
  }
})

module.exports = config
