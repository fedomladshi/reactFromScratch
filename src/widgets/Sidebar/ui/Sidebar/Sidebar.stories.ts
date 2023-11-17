import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
    args: {

    },
};

SidebarLight.decorators = [storeDecorator({ user: { authData: { username: 'admin' } } })];

export const SidebarDark: Story = {
    args: {

    },
};

SidebarDark.decorators = [themeDecorator(AppTheme.DARK), storeDecorator({ user: { authData: { username: 'admin' } } })];
