import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/6shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/6shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../src/6shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/6shared/const/theme';
import { FeaturesFlagsDecorator } from '../../src/6shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { ThemeDecorator } from '../../src/6shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                {
                    name: 'light',
                    class: ['app', Theme.LIGHT],
                    color: '#ffffff',
                    default: true,
                },
                {
                    name: 'dark',
                    class: ['app', Theme.DARK],
                    color: '#000000',
                },
                {
                    name: 'blue',
                    class: ['app', Theme.YELLOW],
                    color: '#f0c048',
                },
            ],
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        StoreDecorator({}),
        SuspenseDecorator,
        FeaturesFlagsDecorator({}),
    ],
};

export default preview;
