var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
	entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [htmlWebpackPluginConfig]
};
