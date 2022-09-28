module.exports = {
  devServer: {
    // 自动开启网页
    open: true,
    // 接口代理
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',
        // 开启跨域
        changeOrigin: true,
        // 重写
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
