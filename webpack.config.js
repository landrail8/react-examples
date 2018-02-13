const path = require('path');

module.exports = {
  name: 'client',
  entry: ['babel-polyfill', 'whatwg-fetch', './src/client/client'],
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'static'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
