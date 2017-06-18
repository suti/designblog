/**
 * Created by suti on 2017/6/18.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

let devConfig = {
	entry: {
		admin:resolve('src/admin/main.js'),
		blog:resolve('src/blog/main.js')
	},
	output: {
		path: resolve('dist'),
		filename: '[name].bundle.[hash].js'
	},
	plugins: [
		new ExtractTextPlugin("[name].style.[hash].css"),
		new HtmlWebpackPlugin({
			filename:"admin",
			template:'src/admin/index.html',
			chunks:['admin'],
		}),
		new HtmlWebpackPlugin({
			filename:"index",
			template:'src/blog/index.html',
			chunks:['blog'],
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],
}

module.exports = merge(baseConfig, devConfig)