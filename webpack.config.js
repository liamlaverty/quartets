const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // https://webpack.js.org/plugins/copy-webpack-plugin/
        new HtmlWebpackPlugin({
            title: 'Quartets | Liam L',
            patterns: [
                { from: "src", to: "dst" },
            ],
        }),
        // https://webpack.js.org/plugins/eslint-webpack-plugin/
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        compress: true,
        port: 9000
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
   
    optimization: {
        runtimeChunk: 'single',
    },
};