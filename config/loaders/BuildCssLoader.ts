import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: true,
                    localIdentName: isDev
                        ? '[path][name]__[local]'
                        : '[hash:base64:5]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
