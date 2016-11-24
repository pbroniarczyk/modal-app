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
};
