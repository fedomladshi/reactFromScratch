import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'shared/contexts/theme';
import ThemeProvider from 'shared/contexts/theme/ThemeContext';

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
