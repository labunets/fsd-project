import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
    title: 'deprecated/6shared/Text',
    component: Text,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const PrimaryLight: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.PRIMARY,
    },
};

export const S: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.PRIMARY,
        size: TextSize.S,
    },
};

export const M: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.PRIMARY,
        size: TextSize.M,
    },
};

export const L: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.PRIMARY,
        size: TextSize.L,
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightTitle: Story = {
    args: {
        title: 'Lorem ipsum',
    },
};

export const LightText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
};
export const Error: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.ERROR,
    },
};

export const Success: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.SUCCESS,
    },
};

export const Warning: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.WARNING,
    },
};

export const Info: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        theme: TextTheme.INFO,
    },
};
