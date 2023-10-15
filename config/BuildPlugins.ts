import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {
    DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance,
} from 'webpack';
import { BuildOptions } from './types/config';

export function BuildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

    ].concat(isDev
        ? [new HotModuleReplacementPlugin()]
        : [new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })]);
}
