import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export function BuildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
     return  [
          new HtmlWebpackPlugin({ template: paths.html }), 
          new ProgressPlugin(), 
     ].concat(isDev ? [] : [new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
     })])
}