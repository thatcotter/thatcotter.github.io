module.exports = {
    title: 'andrew cotter',
    productionTip: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@images': './images',
                '@projects': '../projects'
            }
        }
    }
}