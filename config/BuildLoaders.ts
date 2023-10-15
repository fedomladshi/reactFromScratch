import { RuleSetRule } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from './loaders/BuildBabelLoader';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/BuildCssLoader';
import { buildSvgLoader } from './loaders/BuildSvgLoader';

export function BuildLoaders(options: BuildOptions): RuleSetRule[] {
    return [
        buildBabelLoader(),
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                getCustomTransformers: () => ({
                    before: [ReactRefreshTypeScript()],
                }),
            },
        },
        buildCssLoader(options.isDev),
        buildSvgLoader(),
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
    ];
}
