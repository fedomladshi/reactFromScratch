import type { Meta, StoryObj } from '@storybook/react';
import { errorBoundaryDecorator } from 'shared/config/storybook/ErrorBoundaryDecorator/errorBoundaryDecorator';
import { themeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from 'shared/contexts/theme';

import { ErrorFallback } from './ErrorFallback';

const meta = {
    title: 'shared/ErrorFallback',
    component: ErrorFallback,
    tags: ['autodocs'],
    decorators: [errorBoundaryDecorator],
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorFallbackLight: Story = {
    args: {

    },
};

export const ErrorFallbackDark: Story = {
    args: {

    },
};

ErrorFallbackDark.decorators = [themeDecorator(Theme.DARK)];
