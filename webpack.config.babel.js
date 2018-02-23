import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    })
  ]
}

export default config
