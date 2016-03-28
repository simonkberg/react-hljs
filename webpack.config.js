var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'react-hljs': path.join(__dirname, 'src', 'hljs.js'),
    'react-hljs.min': path.join(__dirname, 'src', 'hljs.js')
  },

  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: 'react-hljs',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'highlight.js': {
      root: 'hljs',
      commonjs2: 'highlight.js',
      commonjs: 'highlight.js',
      amd: 'highlight.js'
    }
  }
}
