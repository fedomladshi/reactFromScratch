import webpack, { RuleSetRule } from 'webpack';
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
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(buildBabelLoader());
    config.module.rules.push(buildSvgLoader());

    return config;
};
