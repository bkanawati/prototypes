var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
var myPlugin = require('./myplugin.js');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {test: /\.(js)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
			new webpack.optimize.UglifyJsPlugin({
                compress: false,
                mangle: false,
                comments: false,
                beautify: true,
                extractComments: {
                  condition: /dab/,
                  filename: '../spec/numbersSpec.js'
                },
            }),
      new myPlugin()
	]

};
