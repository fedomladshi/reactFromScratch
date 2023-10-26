import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import LoginForm from './LoginForm';

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

LoginFormLight.decorators = [storeDecorator({ loginForm: { password: '122', username: 'admin' } })];

export const LoginFormLoadingLight: Story = {
    args: {
    },
};

LoginFormLoadingLight.decorators = [
    storeDecorator({
        loginForm: {
            password: '122', username: 'admin', isLoading: true,
        },
    }),
];

export const LoginFormErrorDark: Story = {
    args: {
    },
};

LoginFormErrorDark.decorators = [
    themeDecorator(AppTheme.DARK),
    storeDecorator({ loginForm: { error: 'ERROR', password: '122', username: 'admin' } }),
];
