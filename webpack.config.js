{
  name: 'client',
  entry: ['babel-polyfill', 'whatwg-fetch', './src/client/client'],
  output: {
    filename: 'client.js',
    path: path.join(__dirname, STATIC_DIR),
    publicPath: `/${STATIC_DIR}`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
