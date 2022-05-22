const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
   mode: "production",
   devtool: "source-map",
   output: {
      assetModuleFilename: "images/[hash][ext][query]"
   },
   plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: "css-loader",
                  options: {
                     modules: true,
                  }
               }
            ]
         }
      ]
   },
   optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()]
   }
});
