import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { Avatar, AvatarSize } from './Avatar';
import AvatarImg from './avatar.png';

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
    title: '6shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        alt: '',
        src: AvatarImg,
    },
};

export default meta;

export const Small: Story = {
    args: {
        size: AvatarSize.SMALL,
    },
};

export const SmallDark: Story = {
    args: {
        size: AvatarSize.SMALL,
    },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Medium: Story = {
    args: {
        size: AvatarSize.MEDIUM,
    },
};

export const LARGE: Story = {
    args: {
        size: AvatarSize.LARGE,
    },
};
