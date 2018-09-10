import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import CleanWebpackPlugin from 'clean-webpack-plugin';

var BUILD_DIR = path.resolve(__dirname, './build/client');
var APP_DIR = path.resolve(__dirname, './application/client');

const config = {
	entry: {
		main: APP_DIR + '/client.js'
	},

	externals: [
		nodeExternals({ whitelist: [/\.css$/] }),
		/assetsManifest.json/,
	  ],

	mode: 'development',

	output: {
		path: BUILD_DIR,
		filename: 'client.js',
		publicPath: 'http://localhost:7070/build/client/',
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }] },
			{ test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 1000, name: 'fonts/[name].[ext]' } }] },
		],
	},
	devServer: {
		contentBase: BUILD_DIR,
		headers: { 'Access-Control-Allow-Origin': '*' },
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new CleanWebpackPlugin(['./build/server']),
		new webpack.DefinePlugin({
		  __BROWSER__: true,
		}),
	],
};

module.exports = config;