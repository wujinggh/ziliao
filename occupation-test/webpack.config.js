const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve('./dist'),
		filename: 'script/bundle.js',
		publicPath: 'http://s.diyigaokao.com/occupationtest'
	},
	plugins: [
		new ExtractTextPlugin("[name].css"),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: {
					loader: 'ts-loader',
					options: {
						transpileOnly: true
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{ test: /\.jpg|png|svg|gig/, use: ['url-loader?limit=8192&name=images/[name].[ext]'] },
			{
				test: /\.less$/, use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'less-loader']
				})}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
}