const { resolve } = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',

  entry: {
    bundle: './index.js',
  },

  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      '~': process.cwd(),
    },
  },

  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new ManifestPlugin(),
  ],
};
