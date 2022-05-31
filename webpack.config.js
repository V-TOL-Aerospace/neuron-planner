const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/js/index.ts',
  entry: {
    index: './src/js/index.ts',
    // index: {
      // import: './src/js/index.ts',
  //     // dependOn: [
  //     //   'libs_map',
  //     //   'libs_util',
  //     // ]
  //   },
  //   // libs_map: ['proj4', 'leaflet'],
  //   // libs_util: ['@zip.js/zip.js', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons']
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',  //<-- Assets module - asset/resource
        generator: {
          filename: 'img/[hash][ext][query]'  //Output all image assets to /img/...
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  plugins: [
      new CopyWebpackPlugin({
          patterns: [
              { from: './src/static' }
          ]
      }),
    new HtmlWebpackPlugin({
      title: 'Neuron Planner',
      meta: {
        "viewport":"width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;",
        "description":"An online mission planning and flight management software.",
        "author":"Kye Morton",
        "msapplication-TileColor":"#da532c",
        "theme-color":"#ffffff",
      }
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/html/head.partial.html'),
      location: 'head',
      priority: 'high'
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/html/body.partial.html'),
      location: 'body',
      priority: 'high'
    })
  ]
};
