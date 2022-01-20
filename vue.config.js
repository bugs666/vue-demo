module.exports = {
    devServer: {
        port: '9090',
        proxy: {
            '/movieApi': {
                target: 'https://movie.querydata.org',
                pathRewrite: {
                    '^/movieApi': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
}
