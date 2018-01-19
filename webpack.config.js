const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"/"
  },
  module:{
  	rules:[
  		{
  			test: /\.css$/,
  			use:[
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
  			test: /\.(png|svg|jpg|gif)$/,
  			use :[
  				'file-loader'
  			]
  		}
  	]
  },
  plugins:[
  	new CleanWebpackPlugin(['dist']),
  	new HtmlWebpackPlugin({
  		title:'webpack-demo'
  	})
  ],
  devServer:{
    contentBase:'./dist',
    hot:true
  }
};
