import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../types/config';
import { buildCssLoader } from '../loaders/BuildCssLoader';
import { buildBabelLoader } from '../loaders/BuildBabelLoader';
import { buildSvgLoader } from '../loaders/BuildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        index: '',
        output: '',
        src: path.resolve(__dirname, '../../src', '..', 'src'),
    };

    config!.resolve!.modules = [
        paths.src,
        'node_modules',
    ];
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push(buildCssLoader(true));
    config!.module!.rules.push(buildBabelLoader());
    config!.module!.rules.push(buildSvgLoader());

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
