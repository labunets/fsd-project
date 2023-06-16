import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineS: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.S,
    },
};
export const OutlineM: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};
export const OutlineL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export const OutlineXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareBackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareBackgroundInvertedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
SquareBackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
