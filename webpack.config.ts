import { BuildPaths, BuildEnv } from './config/types/config';
import path from "path";
import { buildWebpackConfig } from './config/buildWebpackConfig';

const paths: BuildPaths = {
     entry:  path.resolve('src', 'index.tsx'),
     output:  path.resolve('build'),
     html: path.resolve('public', 'index.html'),
     index: path.resolve('build', 'index.html'),
}

export default (env: BuildEnv) => {
     const mode = env.mode || 'development';
     const port = env.port ||  3000;

     const isDev = mode === 'development';

     return  buildWebpackConfig({
          mode,
          paths,
          isDev,
          port,
     })
};