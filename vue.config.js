
module.exports = {
    pages: {
        'index': {
            entry: 'examples/main.js', // 输出
            template: 'public/index.html', // 模版
            filename: 'index.html'
        }
    },
    // 扩展webpack，使用chainWebPack
    chainWebpack: (config) => {
        config.module
            .rule('js')
            .include
                .add('/packages')
                .end()
            .use('babel')
            .loader('babel-loader')
    }
}