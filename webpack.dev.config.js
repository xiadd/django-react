const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const glob = require('glob')

function getEntries (EntirePath) {
  EntirePath = path.resolve(EntirePath)
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './static/scripts/index'
  ],

  output: {
    path: path.resolve('./static/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3001/static/bundles/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.NodeEnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {

    }
  },
  devServer: {
    port: 3001,
    publicPath: '/static/bundles/'
  }
}