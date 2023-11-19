import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
    title: '6shared/Text',
    component: Text,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const PrimaryLight: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'primary',
    },
};

export const S: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'primary',
        size: 's',
    },
};

export const M: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'primary',
        size: 'm',
    },
};

export const L: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'primary',
        size: 'l',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'primary',
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
        variant: 'error',
    },
};

export const Success: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'warning',
    },
};

export const Info: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: 'info',
    },
};
