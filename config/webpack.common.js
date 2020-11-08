const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/assets/scripts/main.js"),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
};
