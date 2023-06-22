import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '3widgets/Sidebar/ui/Sidebar';
import { renderWithTranslation } from '6shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from '6shared/lib/tests/componentRender/componentRender';

describe(
    'Sidebar',
    () => {
        test(
            'render',
            () => {
                componentRender(<Sidebar />);
                expect(screen.getByTestId('sidebar')).toBeInTheDocument();
            },
        );

        test(
            'toggle',
            () => {
                componentRender(<Sidebar />);
                const toggleBtn = screen.getByTestId('sidebar-toggle');
                expect(screen.getByTestId('sidebar')).toBeInTheDocument();
                fireEvent.click(toggleBtn);
                expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
            },
        );
    },
);