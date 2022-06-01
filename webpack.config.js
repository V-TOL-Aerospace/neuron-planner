const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/js/index.ts',
  entry: {
    // index: './src/js/index.ts',
    index: {
      import: './src/js/index.ts',
      dependOn: [
        'libs_map',
        'libs_util',
      ]
    },
    libs_map: ['proj4', 'leaflet'],
    libs_util: ['@zip.js/zip.js', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons']
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
    //XXX:  Chunk splitting is handled manually through entry point grouping.
    //      This may not be the best way, but at least it gets all our bundles low
    //      and (hopefully) provides efficient loading!
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   },
      // maxInitialRequests: Infinity,
      // minSize: 0,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name(module) {
      //       // get the name. E.g. node_modules/packageName/not/this/part.js
      //       // or node_modules/packageName
      //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

      //       // npm package names are URL-safe, but some servers don't like @ symbols
      //       return `npm.${packageName.replace('@', '')}`;
      //     },
      //   },
      // },
    // },
  },
  plugins: [
      new CopyWebpackPlugin({
          patterns: [
              { from: './src/static' }
          ]
      }),
    new HtmlWebpackPlugin({
      template: 'src/html/index.html',
      title: 'Neuron Planner',
      meta: {
        "viewport":"width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;",
        "description":"An online mission planning and flight management software.",
        "author":"Kye Morton",
        "msapplication-TileColor":"#da532c",
        "theme-color":"#ffffff",
      }
    })
  ]
};
