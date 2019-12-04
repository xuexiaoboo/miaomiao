module.exports = {
    devServer: {
        proxy: { //反向代理字段
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true,
                pathReWrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}