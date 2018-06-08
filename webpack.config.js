
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
var path = require('path');
BrowserConfig = {
              entry: './src/browser/index.js',
                output: {
                    path: path.resolve(__dirname),
                    filename: './bundle.js',
                     publicPath: '/'

                },
              module: {
                  loaders: [
                      {
                          test: /\.js$/,
                           exclude: /(node_modules)/,
                          loader: 'babel-loader',
                          query: {
                              presets: ['es2015', 'react']
                          }
                      }
                  ]
              },
              devServer: {
                  historyApiFallback: true,
              },
              stats: {
                  colors: true
              },
              devtool: 'source-map',
              plugins: [
                   new webpack.DefinePlugin({
                     __isBrowser__: "true"
                   })
                 ]
};
ServerConfig = {
              entry: './src/server/index.js',
              output: {
                    path: path.resolve(__dirname),
                    filename: './server.js',
                    libraryTarget: "commonjs2",
                    publicPath: '/'

                },
                node: {
                    __dirname: false
                },
              target: 'node',

              externals: [nodeExternals()],
              plugins: [
                 new webpack.DefinePlugin({
                   __isBrowser__: "false"
                 })
               ],
              module: {
                  loaders: [
                      {
                          test: /\.js$/,

                          exclude: /(node_modules)/,
                          loader: 'babel-loader',
                          query: {
                              presets: ['es2015', 'react']
                          }
                      }
                  ]
              },
              devServer: {
                historyApiFallback: true,
              }
};
ApolloServerConfig = {
              entry: './src/ApolloServer/index.js',
              output: {
                    path: path.resolve(__dirname),
                    filename: './apolloServer.js',
                    libraryTarget: "commonjs2",
                    publicPath: '/'

                },
                node: {
                    __dirname: false
                },
              target: 'node',

              externals: [nodeExternals()],
              plugins: [
                 new webpack.DefinePlugin({
                   __isBrowser__: "false"
                 })
               ],
              module: {
                  loaders: [
                      {
                          test: /\.js$/,

                          exclude: /(node_modules)/,
                          loader: 'babel-loader',
                          query: {
                              presets: ['es2015', 'react']
                          }
                      }
                  ]
              },
              devServer: {
                historyApiFallback: true,
              }
};
module.exports = [ BrowserConfig , ServerConfig ,ApolloServerConfig];
