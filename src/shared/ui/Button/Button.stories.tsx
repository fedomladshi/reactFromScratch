import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { AppTheme } from 'shared/contexts/theme';

import { Button, ButtonSize } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clear',
    },
};

ClearDark.decorators = [themeDecorator(AppTheme.DARK)];

export const ClearInvertedLight: Story = {
    args: {
        children: 'Clear',
        theme: 'clearInverted',
    },
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'Clear',
        theme: 'clearInverted',
    },
};

ClearInvertedDark.decorators = [themeDecorator(AppTheme.DARK)];

export const OutlineLight: Story = {
    args: {
        children: 'Outline',
        theme: 'outline',
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Outline',
        theme: 'outline',
    },
};

OutlineDark.decorators = [themeDecorator(AppTheme.DARK)];

export const BackgroundTheme: Story = {
    args: {
        children: 'Background',
        theme: 'background',
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Background',
        theme: 'backgroundInverted',
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '<',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '<',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '<',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.XL,
    },
};

export const SizeM: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.XL,
    },
};
