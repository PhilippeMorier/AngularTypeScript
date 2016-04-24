module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js',
        sourceMapFilename:'[name].[hash].map'
    },
    devtool: "source-map"
};