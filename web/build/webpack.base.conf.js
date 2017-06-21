/**
 * Created by suti on 2017/6/18.
 */
"use strict"
const path = require('path')
const ExtractTextPlugin=require('extract-text-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

let baseConfig = {
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'config':resolve('config'),
			'common': resolve('src/common'),
			'components':resolve('src/components')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						loaders: {
							css: ExtractTextPlugin.extract({
								use: 'css-loader',
								fallback: 'vue-common-loader'
							}),
							less: ExtractTextPlugin.extract({
								use: 'css-loader!less-loader',
							})
						}
					}
				}
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]?[hash]'
					}
				}
			},
			{
				test: /\.(html|htm|tpl)/,
				use:{
					loader:'html-loader'
				}
			}
		]
	},
}

module.exports = baseConfig;
