const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        static: {
            contentBase: path.join(__dirname, "dist")
        },
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\[name].(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            },{
                test:/\.(s*)css$/,
                use: [
                    'style-loader',
                   'css-loader',
                   'sass-loader',
                ]
             },
             {
                test: /\[name].(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                ]
             },
             {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: "babel-loader"
                }
              },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};