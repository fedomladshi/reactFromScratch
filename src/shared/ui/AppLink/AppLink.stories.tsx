import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import { AppLink } from './AppLink';

import './AppLink.module.scss';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkInvertedLight: Story = {
    args: {
        theme: 'inverted',
        children: 'link',
    },
};

export const AppLinkInvertedDark: Story = {
    args: {
        theme: 'inverted',
        children: 'link',
    },
};

AppLinkInvertedDark.decorators = [themeDecorator(AppTheme.DARK)];

export const AppLinkPrimaryLight: Story = {
    args: {
        theme: 'primary',
        children: 'link',
    },
};

export const AppLinkPrimaryDark: Story = {
    args: {
        theme: 'primary',
        children: 'link',
    },
};

AppLinkPrimaryDark.decorators = [themeDecorator(AppTheme.DARK)];
