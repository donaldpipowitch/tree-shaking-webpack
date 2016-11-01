const join = require('path').join;
const webpack = require('webpack');

const babelConfig = JSON.stringify({
  presets: [
    [ 'babel-preset-es2015', { modules: false } ]
  ]
});

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: join(process.cwd(), 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: `babel-loader?${babelConfig}!awesome-typescript-loader`
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
