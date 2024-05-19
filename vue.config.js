module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://1.116.64.64:5004/api2/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.plugin('define').tap((definitions) => {
          Object.assign(definitions[0], {
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
          })
          return definitions
        })
      }
}