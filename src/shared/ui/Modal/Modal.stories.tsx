import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from 'shared/contexts/theme';
import 'app/styles/index.scss';

import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugiat dignissimos inventore.',
    },
};

export const DarkTheme: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugiat dignissimos inventore.',
    },
};

DarkTheme.decorators = [themeDecorator(Theme.DARK)];
