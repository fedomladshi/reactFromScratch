import path from 'path';
import { BuildPaths, BuildEnv } from './config/types/config';
import { buildWebpackConfig } from './config/buildWebpackConfig';

const paths: BuildPaths = {
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('build'),
    html: path.resolve('public', 'index.html'),
    index: path.resolve('build', 'index.html'),
    src: path.resolve('src'),
};

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        project: 'frontend',
        apiUrl,
    });
};
