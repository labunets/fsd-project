import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof AppLink>;

const meta: Meta<typeof AppLink> = {
    title: '6shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '#',
    },
};

export default meta;

export const Primary: Story = {
    args: {
        children: 'AppLink',
        variant: 'primary',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'AppLink',
        variant: 'primary',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red: Story = {
    args: {
        children: 'AppLink',
        variant: 'red',
    },
};

export const RedDark: Story = {
    args: {
        children: 'AppLink',
        variant: 'red',
    },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
