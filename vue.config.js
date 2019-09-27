const path = require('path')
const configs = require('./config')

// 用于做相应的merge处理
const merge = require('webpack-merge')
const webpack = require('webpack')
// const { DefinePlugin } = require('webpack')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isPro = process.env.NODE_ENV === 'production'
const cfg = isPro ? configs.build.env : configs.dev.env

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: true,
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options =>
                merge(options, {
                    limit: 5120,
                })
            )

        config.resolve.alias
            .set('@', resolve('src'))
            .set('_lib', resolve('src/common'))
            .set('_com', resolve('src/components'))
            .set('_img', resolve('src/images'))
            .set('_ser', resolve('src/services'))

        config.plugin('define')
            .tap(args => {
                let name = 'process.env';
                args[0][name] = merge(args[0][name], cfg)
                return args
            })
    },

    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080, // 端口地址
        // https: false, // 使用https提供服务
        proxy: {
            '/api': {
                target: 'https://api.dzccn.com/index.php/',
                // target: 'http://api.cmmss.cn/index.php/',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        },
        progress: true,
    }
}
