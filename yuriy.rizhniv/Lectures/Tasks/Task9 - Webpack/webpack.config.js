const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'frontend'),
  build: path.join(__dirname, 'public')
};

module.exports = {
  entry: PATHS.source,
  output: {
    path: PATHS.build,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                 {loader: "css-loader"},
                 {loader: "less-loader"}
               ],
          }),
      },
    ],
  },
  watch: true,
  plugins: [
      new ExtractTextPlugin('index.css'),
  ],
};
