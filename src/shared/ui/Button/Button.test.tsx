import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Hello</Button>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme="clear">Hello</Button>);
        expect(screen.getByText('Hello')).toHaveClass('clear');
    });
});
