const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HTMLWebpackPlugin({
        template: "./src/template.html",
    })],

}