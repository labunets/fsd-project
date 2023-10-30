import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/6shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/6shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/6shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator({}),
        SuspenseDecorator,
    ],
};

export default preview;
