const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'media'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.png', // IMPORTANT url has to be set relative
      prefix: 'img/'
    })
  ]
}
