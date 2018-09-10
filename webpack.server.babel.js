import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const __APP_ENV__ = process.env.APP_ENV;
const __APP_PUBLIC_PATH__ = process.env.APP_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

var BUILD_DIR = path.resolve('./build/server');
var APP_DIR = path.resolve('./application/server');

const config = {
 
  entry:  APP_DIR + '/server.js',

  externals: [
		nodeExternals({ whitelist: [/\.css$/] }),
		/assetsManifest.json/,
	  ],

	mode: 'development',

	output: {
    path: BUILD_DIR,
    filename: 'server.js',
  },


  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }] },
    ],
  },

	plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['./build/server']),
    new webpack.DefinePlugin({
      __BROWSER__: false,
    }),
  ],

}

module.exports = config;