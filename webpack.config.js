const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = (env) => {
    const isProduction = !!env.production;

    return {
        mode: isProduction ? 'production' : 'development',
        entry: resolvePath('index.js'),
        devServer: {
            static: __dirname + "/h5/",
            host: '0.0.0.0',
            port: 3000,
            allowedHosts: ['ad.whalew.com'],
            historyApiFallback: true,
        },
        output: {
            filename: '[name].[contenthash:8].js',
            path: resolvePath('build'),
            publicPath: './',
        },
        // 也可以用 source-map，但是在启动时如果项目很大会比较耗时，好处是显示的错误信息更加充分
        // 可以参考：https://webpack.js.org/configuration/devtool/
        devtool: isProduction ? false : 'cheap-module-source-map',
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: 'body',
                template: resolvePath('h5/index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:8].css',
            }),
            new webpack.DefinePlugin({
                __DEV__: !isProduction
            }),
        ],
        module: {
            rules: [
                // 解析 js 文件
                {
                    test: /\.js$/,
                    include: [
                        /application/, 
                        /h5\/polyfills/, 
                        /node_modules\/react-native-web-refresh-control/, 
                        /node_modules\/react-native-animatable/, 
                        /node_modules\/react-native-chart-kit/, 
                        /node_modules\/react-native-progress/,
                        /node_modules\/react-native-pickers/
                    ],
                    use: {
                        loader: 'babel-loader',
                        
                        options: {
                            cacheDirectory: true,
                            presets: ['module:metro-react-native-babel-preset'],
                            // 如果项目用到了装饰器等语法糖，可能需要添加相应的插件进行解析
                            plugins: ['react-native-web', 'lodash'],
                            configFile: false,
                        },
                    },
                },
                // 解析项目用到的音频等素材
                {
                    test: /\.(mp3|mp4)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'sounds',
                            esModule: false,
                        },
                    },
                },
                // 解析项目使用的图片资源
                {
                    test: /\.(png|jpe?g|gif)$/,
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'images',
                        scalings: { '@2x': 2, '@3x': 3 },
                        esModule: false,
                    },
                    loader: 'react-native-web-image-loader',
                },
                // 解析项目用到的css样式
                {
                    test: /\.css$/,
                    include: [/application/, /h5\/polyfills/, /node_modules\/video.js/, /node_modules\/rmc-picker/],
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        optimization: {
            // 开发环境不需要进行压缩
            minimize: isProduction,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    extractComments: 'all',
                    terserOptions: {
                        compress: {
                            // 生产上去掉日志输出
                            drop_console: true,
                        },
                    },
                }),
            ],
            // 代码分割，可参考：https://webpack.js.org/guides/code-splitting/
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    default: {
                        name: 'common',
                        // 模块被引用2次以上的才拆分
                        minChunks: 2,
                        priority: -10,
                    },
                    // 拆分第三方库（node_modules 中的模块都会拆到一起）
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        priority: -9,
                    },
                },
            },
            runtimeChunk: {
                name: (entrypoint) => `runtime-${entrypoint.name}`,
            },
        },
        resolve: {
            alias: {
                'react-native$': 'react-native-web',
                'react-native-video': resolvePath('h5/polyfills/Video.js'),
                'react-native-sound': resolvePath('h5/polyfills/Sound.js'),
                'react-native-rtmpview': resolvePath('h5/polyfills/Rtmp.js'),
                'react-native-background-timer': resolvePath('h5/polyfills/Timer.js'),
                'react-native-linear-gradient': 'react-native-web-linear-gradient',
                'react-native-action-button': resolvePath('h5/polyfills/ActionButton.js'),
                'react-native-looped-carousel': resolvePath('h5/polyfills/Carousel.js'),
                'react-native-image-zoom-viewer': 'react-native-web-image-zoom-viewer',
            },
            // 优先使用 .web.js 后缀的文件
            extensions: ['.web.js', '.js'],
        },
    }
}