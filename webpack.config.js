const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/RagnarokDungeonsGame.ts",
    mode: "development",
    output: {
        filename: '[name].js',
        sourceMapFilename: "[name].map",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        host: 'localhost',
        port: 42069
    },
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ],
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebPackPlugin({
            title: "Ragnarok Dungeons",
        })
    ]
}