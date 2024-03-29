import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof AppLink>;

const meta: Meta<typeof AppLink> = {
    title: 'deprecated/6shared/AppLink',
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
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.RED,
    },
};

export const RedDark: Story = {
    args: {
        children: 'AppLink',
        theme: AppLinkTheme.RED,
    },
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
