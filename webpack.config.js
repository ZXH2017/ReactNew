var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',    
    context : __dirname + '/src',
    entry : "./js/index.js",
    module: {
        rules:[{
            test:/\.js?$/,
            exclude:/(node_modules)/,
            loader:"babel-loader",
            query:{
                presets:['react','es2015']
            }
        }]
    },
    output:{
        path:__dirname +"/src/",
        filename:"bundle.js"
    }
}