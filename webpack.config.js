const path = require("path");

module.exports = {
  entry: {
    filename: path.resolve(__dirname, ".", "app.js"),
  },
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
