import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
    args: {

    },
};

export const NavbarDark: Story = {
    args: {

    },
};

NavbarDark.decorators = [themeDecorator(AppTheme.DARK)];
