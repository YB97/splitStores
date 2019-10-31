let path = require("path")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js",
    publicPath: "dist/"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.module\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]__[sha1:hash:hex:7]"
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /^((?!\.module).)*scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~c": path.resolve(__dirname, "src/components"),
      "~p": path.resolve(__dirname, "src/pages"),
      "~s": path.resolve(__dirname, "src/store"),
      "~v": path.resolve(__dirname, "src/vars")
    }
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    proxy: {
      "/reactcourseapi/**": {
        target: "http://faceprog.ru",
        secure: false,
        changeOrigin: true
      }
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial"
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = conf
