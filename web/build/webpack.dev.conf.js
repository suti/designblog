/**
 * Created by suti on 2017/6/18.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

let devConfig = {
	entry: resolve('src/'+process.env.DEV_ENTRY+'/main.js'),
	output: {
		path: resolve('dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
	],
	devServer: {
		historyApiFallback: true,
		noInfo: true,
	},
	devtool: '#eval-source-map'
}

module.exports = merge(baseConfig, devConfig)
