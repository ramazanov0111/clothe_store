const mix = require('laravel-mix');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();

mix.webpackConfig({
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './resources/views/client/main/index.blade.php'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8000/api'
        })
    }
});
