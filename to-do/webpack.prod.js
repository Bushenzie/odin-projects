const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "app[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin(), new MiniCSSExtractPlugin({

        filename: "[name].[contenthash].css",
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"],
            }
        ]
    }
})