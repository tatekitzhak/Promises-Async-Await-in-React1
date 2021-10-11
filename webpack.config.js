const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const htmlPlugin = new HtmlWebPackPlugin({
//          template: "./src/index.html",
//          filename: "./index.html" });

const htmlPluginIndex = new htmlWebpackPlugin({
          filename: "./index.html",
          inject: true,
          chunks: ['index'],
          template: "./src/index.html"
        });

const MiniCss = new MiniCssExtractPlugin({filename: '[name].css'});

module.exports = {
    entry: {
      index: ["babel-polyfill","./src/index.js"]
    },
      output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/',
      },
    plugins: [
      MiniCss,
      htmlPluginIndex
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader"}
      },
      {
        test: /\.html$/, use:[ {loader: "html-loader"} ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i, use:[{ loader: 'url-loader', options: {limit: 10000}}]
      },
      {
        test: /\.css$/, use: ["style-loader", "css-loader"]//use: [loader-b","loader-a"]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            /*loader: 'style-loader'*/
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }

};
