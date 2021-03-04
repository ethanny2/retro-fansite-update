const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
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
  // devtool: "eval",
  resolve: {
    fallback: {
      fs: false
    }
  },
  stats: {
    children: true
  },
  // node: {
  //   fs: "empty",
  // },
  output: {
    // Contenthash substitution used for cache bursting
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][hash][ext]"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp4|svg|ttf|webp|woff2|woff|eot)$/i,
        type: "asset/resource"
      }
      // {
      //   test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|webp|woff2|woff|eot)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         outputPath: "images/",
      //         name: "[name].[ext]",
      //         // name: "[name].[contenthash].[ext]",
      //         esModule: false
      //       }
      //     }
      //   ]
      // }
      // Loads all audio files;
      // {
      //   test: /\.(ogg|wma|mp3|wav|mpe?g)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "audio/",
      //       name: "[name].[contenthash].[ext]",
      //       esModule: false
      //     }
      //   }
      // },
      // Loads all font files
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "fonts/",
      //       name: "[name].[contenthash].[ext]",
      //       esModule: false
      //     }
      //   }
      // },
      // loads all html files and adds images in them to dependecy graph
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: "html-loader",
      //     options: {
      //       minimize: true,
      //       esModule: false
      //       // root: path.resolve(__dirname, "dist")
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "css/style.[contenthash].css",
    //   chunkFilename: "css/style.[contenthash].css"
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css"
    //   // chunkFilename: "[id].css"
    // }),
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
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 1 }],
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
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
    // new ImageminWebpWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    // minimizer: [
    //   // Minify JS; by default applies to all .js files;
    //   new TerserJSPlugin({
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true
    //   }),
    //   // Minify CSS; default applies to all .css files
    //   new OptimizeCSSAssetsPlugin({})
    // ],
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor/npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
});
