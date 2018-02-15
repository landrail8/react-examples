const path = require('path');

const commonLoaders = [
  {
    /*
     * TC39 categorises proposals for babel in 4 stages
     * Read more http://babeljs.io/docs/usage/experimental/
     */
    test: /\.jsx$/, loader: "babel-loader?stage=0"
  },
  {
    test: /\.js$/,
    loader: "babel-loader?stage=0",
    include: path.join(__dirname, "app")
  },
  { test: /\.png$/, loader: "url-loader" },
  { test: /\.jpg$/, loader: "file-loader" },
  { test: /\.html$/, loader: "html-loader" }
];

module.exports = {
  name: 'client',
  entry: ['babel-polyfill', 'whatwg-fetch', './src/index'],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
      rules: commonLoaders.concat([
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['env', 'react']
            }
          }
        }
      ])
    }
}
