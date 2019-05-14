import path from 'path';

module.exports = {
  //debug: true,
  devtool: 'inline-source-map',
  mode: 'development',
  //noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [{
        // include .js files
        // we are asking it to handle .JS files
        test: /\.jsx?$/,
        // preload the jshint loader
        enforce: "pre",
        // exclude any and all files in the node_modules folder
        exclude: /node_modules/,
        // USe the babel loader. With webpack 2.0.0, the -loader suffix is not allowed to be omitted
        //loaders: ['babel-loader']
    },
    {
        // also, it is handling the .CSS files for us.
        test: /\.css$/,
        loader: ['style-loader','css-loader']
    }]
  },
}