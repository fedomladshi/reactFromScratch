import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import { Select } from './Select';

import './Select.module.scss';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectWithoutHeightLight: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { content: 'value 1', value: '1' },
            { content: 'value 2', value: '2' },
        ],
    },
};

export const SelectDark: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { content: 'value 1', value: '1' },
            { content: 'value 2', value: '2' },
        ],
    },
};

SelectDark.decorators = [themeDecorator(AppTheme.DARK)];
