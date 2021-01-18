const path = require('path');

const { build, src, public, tsconfig, postcss } = require('../paths');

const { isProduction } = require('../utils');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    new MiniCssExtractPlugin(),

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
              '*.DS_Store'
            ]
          },
          filter: (filePath) => !(/index.html/.test(filePath))
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
          isProduction 
            ?  MiniCssExtractPlugin.loader
            : 'style-loader'
          ,
          // bild css imports
          {
            loader: 'css-loader',
            options: {
              // sass, postcss
              modules: { auto: true },
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
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
        type: 'asset/resource',
        generator: {
          filename: isProduction ? `${outputImagesDir}/[hash][ext][query]` : `${outputImagesDir}/[name][ext][query]`
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/, 
        type: 'asset/inline'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false
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
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: tsconfig })
    ]
  }
};
