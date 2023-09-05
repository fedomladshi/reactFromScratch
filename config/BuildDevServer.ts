import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfig {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
    };
}
