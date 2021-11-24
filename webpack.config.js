const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: '../js/main.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '../css/[name].css' })],
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
}
