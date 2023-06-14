import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

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
                render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
                expect(screen.getByText('TEST')).toHaveClass('clear');
                // screen.debug();
            },
        );
    },
);
