import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/BuildBabelLoader';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/BuildCssLoader';
import { buildSvgLoader } from './loaders/BuildSvgLoader';

export function BuildLoaders(options: BuildOptions): RuleSetRule[] {
    return [
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        buildSvgLoader(),
        buildBabelLoader(options.isDev),
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        buildCssLoader(options.isDev),
    ];
}
