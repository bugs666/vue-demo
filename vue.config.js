module.exports = {
    devServer: {
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
