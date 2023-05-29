import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { RuleSetRule } from "webpack";

export function BuildLoaders(options: BuildOptions): RuleSetRule[] {
     return [
               {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
               },
               {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                      // Translates CSS into CommonJS
                      {
                         loader: "css-loader",
                         options: {
                              modules: {
                                auto: true,
                                localIdentName: options.isDev ? "[path][name]__[local]" : '[hash:base64:5]',
                              },
                         },
                    },
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
                  },
          ]
}