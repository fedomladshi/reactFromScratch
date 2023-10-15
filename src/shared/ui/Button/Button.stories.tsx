import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from 'shared/contexts/theme';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

ClearDark.decorators = [themeDecorator(Theme.DARK)];

export const OutlineLight: Story = {
    args: {
        children: 'Outline',
        theme: 'outline',
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: 'outline',
    },
};

OutlineDark.decorators = [themeDecorator(Theme.DARK)];
