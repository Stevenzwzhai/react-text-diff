const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.cm\.styl$/,
                loader: 'style-loader!css-loader?modules&camelCase&localIdentName=[local]-[hash:base64:5]!stylus-loader'
            }
        ]
    },
    externals: {
        'diff': 'diff',
        'diff2html': 'diff2html',
        'highlight.js':'highlight.js',
        'react': 'react'
    }
};