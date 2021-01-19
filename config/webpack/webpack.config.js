const path = require('path');

const { build, src, public, tsconfig, postcss } = require('../paths');

const { isProduction } = require('../utils');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const outputResourcesDir = 'assets/resources';
const outputImagesDir = 'assets/images';

module.exports = {
  // entry file
  entry: [
    path.join(src, 'index.tsx')
  ],

  output: {
    path: build,
    filename: '[contenthash].js',
    publicPath: '/'
  },

  plugins: [
    // clear build dir
    new CleanWebpackPlugin(),

    // extract css to .css file
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),

    // create index.html from template
    new HtmlWebpackPlugin({
      template: path.join(public, 'index.html'),
      filename: 'index.html'
    }),

    // copy files from public to build
    new CopyWebpackPlugin({
      patterns: [
        {
          from: public,
          globOptions: {
            dot: true,
            ignore: [
              '*.DS_Store',
              '**/index.html'
            ]
          }
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: [/node_modules/, /__tests__/],
        use: ['ts-loader']
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          // css link way (file, styleTag)
          (
            isProduction 
              ?  MiniCssExtractPlugin.loader
              : 'style-loader'
          ),
          // bild css imports
          {
            loader: 'css-loader',
            options: {
              // sass, postcss
              modules: { auto: true }, // if .module.s?css load as css-module
              importLoaders: 2,
              url: false,
            }
          },
          // postprocess css
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: postcss,
              }
            }
          },
          // generate css from scss
          'sass-loader'
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i, 
        loader: 'img-optimize-loader',
        options: {
          outputPath: outputImagesDir,
          name: isProduction ? '[contenthash].[ext]' : '[name].[ext]',
          inline: {
            limit: 0 // always extract to file
          },
          compress: {
            mode: 'low', // 'lossless', 'high'
            webp: true, // always create webp from png and jpg
            disableOnDevelopment: true, // don't compress on development mode
          }
        }
      },
      {
        test: /\.(apng|eot|otf|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: isProduction ? `${outputResourcesDir}/[hash][ext][query]` : `${outputResourcesDir}/[name][ext][query]`
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false // don't remove svg viewBox
                }
              }
            }
          }, 
          'url-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: tsconfig })
    ]
  }
};