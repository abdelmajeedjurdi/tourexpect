const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    mode: 'production',
    entry: './resources/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    plugins: [
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/about', '/contact'],
            renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                inject: {},
                headless: false,
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    }
}
