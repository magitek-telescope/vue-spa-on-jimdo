module.exports = {
  entry: "./src/main.js",
  output: {
    filename: 'public_html/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader?presets[]=es2015"
      }
    ]
  }
};
