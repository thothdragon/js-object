const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js',
        './src/app.scss'
    ],
    output: {
        path: __dirname + "/dist",
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    watchOptions: {
        ignored: [
            /node_modules/,
            /test/
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: 'app.css',
            }
        ),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: [
                'index.html',
            ],
            server: {
                baseDir: [
                    './'
                ]
            }
        })
    ]
};