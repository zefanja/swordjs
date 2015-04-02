var webpack = require("webpack");
module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: "./dist/js",
        filename: "sword.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json'},
            { test: "/en_bcv_parser.min.js/", loader: "exports?bcv_parser"}
        ],
    }
};