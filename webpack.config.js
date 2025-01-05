// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    open: true, // Automatically open the browser when the server starts
    port: 8080, // Run the dev server on port 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html"
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },  
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
        {
          test: /\.(js|jsx)$/, // Match .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options:{
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    }
  };
