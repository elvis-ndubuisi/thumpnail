const path = require("path");

module.exports = {
    entry: "./src/demo.ts",
    mode: "development",
    // devTool: "inline-source-map",
    output: {filename: "bundle.js", path: path.join(__dirname, "dist")},
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{test: /\.ts$/, use: "ts-loader", exclude: "/node_modules/"}],
    },
    devServer: {
        // path: path.join(__dirname, "demo"),
        contentBase: "./dist",
        compress: true,
        hot: true,
        port: 8080,
    },
};
