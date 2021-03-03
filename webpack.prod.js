const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-eval-source-map",
  node: {
    fs: "empty"
  },
  output: {
    // Contenthash substitution used for cache bursting
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/",
              name: "[name].[ext]",
              // name: "[name].[contenthash].[ext]",
              esModule: false
            }
          }
        ]
      },
      // Loads all audio files;
      {
        test: /\.(ogg|wma|mp3|wav|mpe?g)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "audio/",
            name: "[name].[contenthash].[ext]",
            esModule: false
          }
        }
      },
      // Loads all font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts/",
            name: "[name].[contenthash].[ext]",
            esModule: false
          }
        }
      },
      // Loads all JSON and text files; add more based on your needs
      // {
      //   test: /\.(txt|JSON)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "data/",
      //       name: "[name].[ext]",
      //       esModule: false
      //     }
      //   }
      // },
      // loads all html files
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
            root: path.resolve(__dirname, "dist")
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css",
      chunkFilename: "css/style.[contenthash].css"
    }),
    // new ImageminPlugin({
    //   optipng: {
    //     optimizationLevel: 6
    //   },
    //   plugins: [
    //     imageminMozjpeg({
    //       quality: 100,
    //       progressive: true
    //     })
    //   ]
    // }),
    new CompressionPlugin({
      test: /\.(html|css|js)(\?.*)?$/i
    }),
    new PurgecssPlugin({
      paths: glob.sync("src/**/*", { nodir: true })
    }),
    new ImageminWebpWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          ]
        ]
      }
    })
  ],
  optimization: {
    minimizer: [
      // Minify JS; by default applies to all .js files;
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      // Minify CSS; default applies to all .css files
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `vendor/npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
});
