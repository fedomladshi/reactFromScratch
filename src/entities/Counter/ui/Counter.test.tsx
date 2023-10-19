import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('should title return number', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 1 } } });

        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
    test('increment', async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 1 } } });

        await userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });
    test('decrement', async () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

        await userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
