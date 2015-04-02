var webpack = require("webpack");
module.exports = {
    entry: "./scripts/sword.js",
    output: {
        path: "./dist/js",
        filename: "sword.min.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json'},
            { test: "/en_bcv_parser.min.js/", loader: "exports?bcv_parser"}
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};