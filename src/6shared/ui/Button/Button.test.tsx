import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe(
    'Button',
    () => {
        test(
            'Render',
            () => {
                render(<Button>TEST</Button>);
                expect(screen.getByText('TEST')).toBeInTheDocument();
            },
        );

        test(
            'Clear theme',
            () => {
                render(<Button theme={ButtonTheme.TERTIARY}>TEST</Button>);
                expect(screen.getByText('TEST')).toHaveClass('tertiary');
                // screen.debug();
            },
        );
    },
);
