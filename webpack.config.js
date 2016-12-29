var webpack = require('webpack');
var path = require('path')

module.exports = {
    devtool: 'eval',
    entry: {
        simple: ["./main.js"]
    },
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }]
    }
}
