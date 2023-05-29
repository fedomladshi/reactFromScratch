import { BuildOptions } from './types/config';
import { Configuration as DevServerConfig } from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConfig {
     return  {
          open: true,
          port: options.port,
          historyApiFallback: true, 
        }
}