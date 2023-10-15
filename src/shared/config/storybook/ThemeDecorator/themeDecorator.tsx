import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'shared/contexts/theme';

export const themeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
