import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
    args: {
        placeholder: 'label',
        value: 'value',
    },
};

export const InputDark: Story = {
    args: {
        placeholder: 'label',
        value: 'value',
    },
};

InputDark.decorators = [themeDecorator(AppTheme.DARK)];
