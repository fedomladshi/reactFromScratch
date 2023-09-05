import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptions } from './types/config';

export function BuildLoaders(options: BuildOptions): RuleSetRule[] {
    return [
        {
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
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
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: options.isDev
                                ? '[path][name]__[local]'
                                : '[hash:base64:5]',
                        },
                    },
                },
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
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
