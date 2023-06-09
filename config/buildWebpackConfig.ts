import { BuildOptions } from './types/config';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import { BuildResolvers } from './BuildResolvers';
import { BuildLoaders } from './BuildLoaders';
import { BuildPlugins } from './BuildPlugins';
import { BuildDevServer } from './BuildDevServer';


export function buildWebpackConfig(options : BuildOptions): webpack.Configuration {
     const {mode, paths, isDev} = options;
     
     return {
          mode: isDev ? 'development' : 'production',
          entry: paths.entry,
          output: {
               filename: '[name].[contenthash].js',
               path: paths.output,
               clean: true
          },
          module: {
               rules: BuildLoaders(options),
          },
          resolve: BuildResolvers(),
          plugins: BuildPlugins(options),
          devServer: isDev ? BuildDevServer(options) : undefined,
          devtool: isDev ? 'inline-source-map' : undefined,
          optimization: {
               splitChunks: {
                 chunks: 'all',
               },
             },
     }
}