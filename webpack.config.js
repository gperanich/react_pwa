var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var config = {
    entry: './app/index.js',

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}

module.exports = config;