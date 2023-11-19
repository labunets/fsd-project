import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Clear theme', () => {
        render(<Button variant="clear">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        // screen.debug();
    });
});
