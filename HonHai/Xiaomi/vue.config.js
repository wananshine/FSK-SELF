const webpack = require("webpack");

module.exports = {

    // baseUrl: '/',  //vue-cli3.3以下版本使用
    publicPath:'./',//vue-cli3.3+新版本使用

    // where to output built files
    // 打包后的输出目录
    outputDir: 'dist',

    // A directory (relative to outputDir) to nest generated static assets (js, css, img, fonts) under.
    assetsDir: '',

    // whether to use eslint-loader for lint on save.
    // 保存时是不是用eslint-loader 来lint 代码
    lintOnSave: false,

    // CSS related options
    css: {
        // extract CSS in components into a single CSS file (only in production)
        extract: true,

        // enable CSS source maps?
        sourceMap: false,

        // pass custom options to pre-processor loaders. e.g. to pass options to
        // sass-loader, use { sass: { ... } }
        // loaderOptions: {
        //   css: {},
        //   postcss: {}
        // },

        // Enable CSS modules for all css / pre-processor files.
        // This option does not affect *.vue files.
        // 用不用 css Modules 啊？
        // modules: false
    },

    devServer: {

          //open: true,
          // host: '0.0.0.0',
          // port: 8080,
          // https: false,
          // hotOnly: false,
          // proxy: 'http://192.168.226.47' // 配置跨域处理,只有一个代理


          port: 8082, // 端口号
          host: '0.0.0.0',
          https: false, // https:{type:Boolean}
          open: true, //配置自动启动浏览器
          // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
          proxy: {
                // '/api': {
                //     target: '/',  // target host
                //     ws: true,  // proxy websockets
                //     changeOrigin: true,  // needed for virtual hosted sites
                //     pathRewrite: {
                //         '^/apis': '/'  // rewrite path
                //     }
                // },
                '/apis': {
                    target: 'http://10.134.163.94/BPM_WEBAPI/api/',  // target host
                    ws: true,  // proxy websockets
                    changeOrigin: true,  // needed for virtual hosted sites
                    pathRewrite: {
                        '^/apis': ''  // rewrite path
                    }
                },
          },  // 配置多个代理
      }
}









