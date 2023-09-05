export type BuildMode = 'development' | 'producation';

export interface BuildPaths {
     entry: string,
     output: string,
     html: string,
     index: string,
     src: string,
}

export interface BuildEnv {
     mode: BuildMode;
     port: number;
}

export interface BuildOptions {
     mode: string,
     paths: BuildPaths,
     isDev: boolean,
     port: number;
}
