import type { Meta, StoryObj } from '@storybook/react';
import { routerDecorator } from 'shared/config/storybook/RouterDecorator/routerDecorator';
import { storeDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';
import avatar from 'shared/assets/tests/storybook.webp';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [routerDecorator()],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};

Primary.decorators = [storeDecorator({
    profile: {
        form: {
            avatar,
            age: 24,
            city: 'Minsk',
            first: 'Alexey',
            country: 'Belarus',
            lastname: 'Fedorovich',
            currency: 'USD',
        },
    },
})];

export const Dark: Story = {
    args: {

    },
};

Dark.decorators = [themeDecorator(AppTheme.DARK), storeDecorator({
    profile: {
        form: {
            avatar,
            age: 24,
            city: 'Minsk',
            first: 'Alexey',
            country: 'Belarus',
            lastname: 'Fedorovich',
            currency: 'USD',
        },
    },
})];
