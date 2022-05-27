const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/js/index.ts',
  entry: {
    index: {
      import: './src/js/index.ts',
      dependOn: 'libs'
    },
    libs: ['proj4', 'leaflet', '@zip.js/zip.js', '@fortawesome/fontawesome-free/js/fontawesome', '@fortawesome/fontawesome-free/js/solid'],
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
  plugins: [
      new CopyWebpackPlugin({
          patterns: [
              { from: './src/static' }
          ]
      })
  ]
};
