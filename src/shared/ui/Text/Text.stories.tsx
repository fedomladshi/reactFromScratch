import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import 'app/styles/index.scss';

import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'text',
        title: 'title',
    },
};

export const OnlyText :Story = {
    args: {
        text: 'text',
    },
};

export const OnlyTitle :Story = {
    args: {
        title: 'title',
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'text',
        title: 'title',
    },
};

PrimaryDark.decorators = [themeDecorator(AppTheme.DARK)];

export const OnlyTextDark :Story = {
    args: {
        text: 'text',
    },
};

OnlyTextDark.decorators = [themeDecorator(AppTheme.DARK)];

export const OnlyTitleDark :Story = {
    args: {
        title: 'title',
    },
};

OnlyTitleDark.decorators = [themeDecorator(AppTheme.DARK)];

export const Error :Story = {
    args: {
        title: 'title',
        text: 'text',
        theme: 'error',
    },
};
