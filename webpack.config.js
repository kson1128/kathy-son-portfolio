const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env' });
const TerserPlugin = require('terser-webpack-plugin');
const ENVIRONMENT = process.env.NODE_ENV;

module.exports = {
  mode: 'development',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: './js/webflow.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js',
  },
  devServer: {
    static: __dirname,
    compress: true,
    // host: '0.0.0.0',
    port: 8080, // port for dev server
  },
  // watch: process.env.NODE_ENV === 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
