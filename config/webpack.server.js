const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {


    target: "node",
    //entry: "./server/scripts.jsx",
    entry: [
        //"webpack-hot-middleware/client",
        path.resolve(__dirname, "../server/scripts")
    ],
    output: {
        // filename: "server.js",
        filename: '[name].js',
        path: path.resolve(__dirname, "../build"),
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".json", ".scss"]
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                //loader: "babel-loader",
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            },
            // {
            //     test: /\.(css)$/,
            //     use: [{
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //             publicPath: "/public/assets/css"
            //         }
            //     }, "css-loader"]
            // },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader","style-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[md5:hash:hex].[ext]",
                        publicPath: "/public/assets/img",
                        outputPath: "img"
                    }
                }]
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    name: "main",
                    test: /node_modules/, // test regular expression
                    chunks: "all",
                }
            }
        }
    },

    externals: [webpackNodeExternals()],
    plugins: [
        new MiniCssExtractPlugin({
            // filename: "public/asset/css/cliet-styles.css"
            filename: `public/asset/css/[name].[contenthash].css`,
            chunkFilename: `public/asset/css/[id].[contenthash].css`
        }),
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, '../src/assets' ),
                    to: path.resolve( __dirname, '../public/assets' )
                }
            ]
        } )
    ],
    devServer: {
        port: 8088,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../public"),
    },
};
