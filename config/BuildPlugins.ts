import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import {
    DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance,
} from 'webpack';
import { BuildOptions } from './types/config';

export function BuildPlugins({
    paths, isDev, apiUrl, project,
}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ].concat(isDev
        ? [new ReactRefreshWebpackPlugin(), new BundleAnalyzerPlugin({
            openAnalyzer: false,
        })]
        : [new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })]);
}
