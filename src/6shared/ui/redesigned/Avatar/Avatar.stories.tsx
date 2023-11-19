import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Avatar } from './Avatar';
import AvatarImg from './avatar.png';
import { Theme } from '@/6shared/const/theme';

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
        size: 's',
    },
};

export const SmallDark: Story = {
    args: {
        size: 's',
    },
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Medium: Story = {
    args: {
        size: 'm',
    },
};

export const LARGE: Story = {
    args: {
        size: 'l',
    },
};
