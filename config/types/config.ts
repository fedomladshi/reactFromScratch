export type BuildMode = 'development' | 'production';

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
     apiUrl: string;
}

export interface BuildOptions {
     mode: BuildMode,
     port: number;
     apiUrl: string;
     paths: BuildPaths,
     isDev: boolean,
}
