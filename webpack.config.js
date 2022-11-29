const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        // https://webpack.js.org/plugins/copy-webpack-plugin/
        new HtmlWebpackPlugin({
            title: 'Quartets | Liam L',
            patterns: [
                { from: "src", to: "dst" },
              ],
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
};