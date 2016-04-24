module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './app.ts',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js',
        sourceMapFilename:'[name].[hash].map'
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};