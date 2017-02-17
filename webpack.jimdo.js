const webpack = require("webpack");
const base = require("./webpack.config.js");

module.exports = Object.assign(
  {},
  base,
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV        : "'jimdo'"
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
);
