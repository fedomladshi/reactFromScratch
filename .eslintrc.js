module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:jsonc/recommended-with-json',
        'airbnb',
        'plugin:storybook/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/no-unused-prop-types': 'warn',
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': 'off',
        'max-len': ['error', { ignoreComments: true, code: 150 }],
        // 'i18next/no-literal-string': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'no-param-reassign': 'off',
        'consistent-return': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        {
            files: ['*.json', '*.json5', '*.jsonc'],
            parser: 'jsonc-eslint-parser',
        },
    ],
};
