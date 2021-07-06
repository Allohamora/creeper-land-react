const baseConfig = require('./webpack.config');
const { build } = require('../paths');

const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

const config = {
  mode: 'development',

  // webpack-dev-server have bug with target 'browserslist'
  target: 'web',

  // source map type
  devtool: 'inline-source-map',

  // devserver options
  devServer: {
    historyApiFallback: true,
    contentBase: build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    // hot update 
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
};

module.exports = merge(baseConfig, config);
