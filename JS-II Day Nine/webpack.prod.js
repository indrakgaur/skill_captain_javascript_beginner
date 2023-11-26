const path = require("path");
const common = require("./webpack.common");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'bundle.[hash].js',       // Output filename
        path: path.resolve(__dirname, 'dist'), // Output directory
    }
});
