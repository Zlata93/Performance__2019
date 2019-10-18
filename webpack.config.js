const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        script: ['./js/main.js']
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: './',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|svg|webp|bmp)/,
                loader: 'url-loader',
                options: {
                    limit: 30000
                }
            },
            // {
            //     test: /\.svg/,
            //     use: {
            //         loader: 'svg-url-loader',
            //         options: {}
            //     }
            // },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            // spriteFilename: 'sprite-[hash:6].svg'
                        }
                    },
                    'svgo-loader'
                ]
            },
            // {
            //     test: /\.svg$/,
            //     use: [
            //         {loader: 'file-loader'},
            //         {
            //             loader: 'svgo-loader',
            //             options: {
            //                 plugins: [
            //                     {removeTitle: true},
            //                     {convertColors: {shorthex: false}},
            //                     {convertPathData: false}
            //                 ]
            //             }
            //         }
            //     ]
            // },
        ]
    },

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new SpriteLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    }
};
