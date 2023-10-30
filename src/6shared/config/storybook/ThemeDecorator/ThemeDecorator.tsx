import { StoryFn } from '@storybook/react';
import { Theme } from '@/6shared/const/theme';
// eslint-disable-next-line rel-path-check/layer-imports
import { ThemeProvider } from '@/1app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>

);
