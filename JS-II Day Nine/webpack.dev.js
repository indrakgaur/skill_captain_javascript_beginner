const path = require("path")
const common = require("./webpack.common");
const { default: merge } = require("webpack-merge");
//onst merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',       // Output filename
        path: path.resolve(__dirname, 'dist'), // Output directory
    }
});
