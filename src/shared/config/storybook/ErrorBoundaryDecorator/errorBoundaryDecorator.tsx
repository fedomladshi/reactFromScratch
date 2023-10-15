import { StoryFn } from '@storybook/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/ErrorFallback/ErrorFallback';

export const errorBoundaryDecorator = (Story: StoryFn) => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Story />
    </ErrorBoundary>
);
