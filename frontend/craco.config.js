// craco.config.js
const path = require("path");
require("dotenv").config();

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Allow importing CSS from node_modules (slick-carousel)
      webpackConfig.module.rules.push({
        test: /\.css$/,
        include: path.resolve(__dirname, "node_modules/slick-carousel"),
        use: ["style-loader", "css-loader"],
      });

      return webpackConfig;
    },
  },
};
