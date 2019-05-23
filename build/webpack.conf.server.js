const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.conf.base')

const config = merge(baseConfig, {
  target: "node",
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, '../bundle')
  },
  externals: [nodeExternals()]
})

module.exports = config
