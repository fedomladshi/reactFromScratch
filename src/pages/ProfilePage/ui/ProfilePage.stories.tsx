import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [storeDecorator({})],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [themeDecorator(AppTheme.DARK)];
