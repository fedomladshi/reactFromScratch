import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
    args: {
    },
};

export const InpuLoginFormDark: Story = {
    args: {
    },
};

InpuLoginFormDark.decorators = [themeDecorator(AppTheme.DARK)];
