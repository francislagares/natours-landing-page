const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/natours-landing-page/'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/,
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
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      //inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.png',
      prefix: 'img/'
    })
  ]
}
