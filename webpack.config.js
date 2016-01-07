module.exports = {
	entry: './app/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'app.compiled.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['babel-preset-es2015'],
					plugins: [
						'babel-plugin-syntax-jsx',
						['babel-plugin-transform-react-jsx', {pragma: 'element'}] // This is so deku will work
					]
				}
			}
		]
	}
}
