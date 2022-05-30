const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/js/index.ts',
  entry: {
    index: {
      import: './src/js/index.ts',
      // dependOn: [
      //   'libs_map',
      //   'libs_util',
      // ]
    },
    // libs_map: ['proj4', 'leaflet'],
    // libs_util: ['@zip.js/zip.js', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons']
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      })
  ]
};
