var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var config = {
    entry: './app/index.js',

    output: {
        filename: "index_bundle.js",
        path: __dirname + '/dist'
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}

module.exports = config;