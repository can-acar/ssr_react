const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),
    target: "node",
    entry: [
        //"webpack-hot-middleware/client",
        path.resolve(__dirname, "../client")
    ],

    output: {
        path: path.resolve(__dirname, "../public"),
        // filename: "bundle-client.js",
        filename: "assets/js/[name].js",
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
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
    plugins: [
        new MiniCssExtractPlugin({
            // filename: "public/asset/css/cliet-styles.css"
            filename: "public/asset/css/[name].[contenthash].css",
            chunkFilename: "public/asset/css/[id].[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../src/assets"),
                    to: path.resolve(__dirname, "../public/assets")
                }
            ]
        }),

    ],
    // development server configuration
    devServer: {
        port: 8088,
        historyApiFallback: true,
    },

    // generate source map
    devtool: 'source-map'
};
