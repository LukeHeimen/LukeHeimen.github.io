import path from "path";
import {Configuration, DefinePlugin} from "webpack";
import * as webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const webpackConfig = (): Configuration => ({
  entry: "./src/index.tsx",
  ...(process.env.production || !process.env.development
    ? {}
    : {devtool: "eval-source-map"}),

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
    plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})],
    alias: {
      "@containers": path.join(__dirname, "src/containers"),
      "@components": path.join(__dirname, "src/components"),
    },
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: "./public/index.html",
      filename: "index.html",
    }),
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
    //   eslint: {
    //     files: './src/**/*.{ts,tsx,js,jsx}',
    //   },
    // }),
  ],
});

export default webpackConfig;
