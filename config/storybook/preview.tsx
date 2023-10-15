import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from 'shared/contexts/theme';
import i18n from './i18next';

const preview: Preview = {
    globals: {
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Русский',
        },
    },
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        i18n,
    },
    decorators: [
        // i18nDecorator(),
        themeDecorator(Theme.LIGHT),
    ],
};

export default preview;
