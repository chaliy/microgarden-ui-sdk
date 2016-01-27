var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = function() {
  return  {
      entry: {
          vendor: [
              'react',
              'react-router',
              'react-dom',
              'babel-polyfill',
              'fetch-polyfill'
          ],
          main: './ui/main'
      },
      output: {
          path: 'wwwroot/js',
          publicPath: 'js/',
          filename: '[name].js'
      },
      module: {
          loaders: [
              { test: /\.css$/, loader: 'style!css!postcss' },
              {
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel',
                  query: {
                      cacheDirectory: true,
                      presets: ['react', 'stage-0', 'es2015'],
                      plugins: ['syntax-async-functions', 'transform-regenerator', 'transform-class-properties']
                  }
              },
              {
                  test: /\.(jpeg|gif|png).*/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'url?limit=1000&name=[name].[hash].[ext]'
              },
              { test: /\.(woff|woff2).*/, loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[hash].[ext]' },
              { test: /\.ttf.*/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=[name].[hash].[ext]' },
              { test: /\.eot.*/, loader: 'file' },
              { test: /\.svg.*/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=[name].[hash].[ext]' }
          ]
      },
      resolve: {
          extensions: ['', '.js', '.jsx']
      },
      plugins: [
          new webpack.ProvidePlugin({
              'Router': 'react-router',
              'React': 'react',
              'ReactDOM': 'react-dom'
          }),
          new webpack.optimize.CommonsChunkPlugin(
              /* chunkName= */'vendor',
              /* filename= */'vendor.js'
          ),
          new webpack.NoErrorsPlugin()
      ],
      postcss: function () {
          return [autoprefixer];
      }
  }
}
