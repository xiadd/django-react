const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const glob = require('glob')

function getEntries (EntirePath) {
  EntirePath = path.resolve(EntirePath)
  const realEntries = {}

  glob.sync(path.resolve(__dirname, 'static/entries/*.js')).forEach(entry => {
    realEntries[entry.slice(EntirePath.length+1)] = entry
  })
  realEntries['hot'] = 'webpack/hot/only-dev-server'
  realEntries['devServerClient'] = 'webpack-dev-server/client?http://0.0.0.0:3001'
  return realEntries
}

module.exports = {
  entry: getEntries(path.resolve('./static/entries')),

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
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor.js',
      filename: 'vendor.js',
      minChunks: 3
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
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
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