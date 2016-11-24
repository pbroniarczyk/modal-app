var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  },

  output: {
    path: __dirname + '/js/',
    filename: 'index.min.js',
  },

  /*plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],*/
};
