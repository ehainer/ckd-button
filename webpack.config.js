const webpack = require('webpack');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: './src/ckd-button.vue',
  output: {
    filename: 'ckd-button.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ckd-button',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'vue'
  }
};
