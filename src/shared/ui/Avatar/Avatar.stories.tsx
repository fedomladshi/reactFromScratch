import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.webp';

import './Avatar.module.scss';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithoutHeightLight: Story = {
    args: {
        src: AvatarImg,
        alt: 'user-avatar',
    },
};

export const AvatarDark: Story = {
    args: {
        src: AvatarImg,
        alt: 'user-avatar',
        size: 50,
    },
};

AvatarDark.decorators = [themeDecorator(AppTheme.DARK)];
