var webpack = require('webpack');

module.exports = {
	entry:'./app.jsx',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css']
			},
			{
				test:/\.jsx$/,
				loaders:['babel']
			}
		]
	},
	devtool:'sourcemap'	
};