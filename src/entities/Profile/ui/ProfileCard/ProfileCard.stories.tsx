import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.webp';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardPrimary: Story = {
    args: {
        data: {
            avatar,
            age: 24,
            city: 'Minsk',
            first: 'Alexey',
            country: 'Belarus',
            lastname: 'Fedorovich',
            currency: 'USD',
        },
    },
};

export const ProfileCardLoading: Story = {
    args: {
        data: {
            age: 24,
            city: 'Minsk',
            first: 'Alexey',
        },
        isLoading: true,
    },
};

export const ProfileCardError: Story = {
    args: {
        error: 'error',
    },
};
