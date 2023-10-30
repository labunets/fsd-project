import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
    title: '6shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalBlue: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};
NormalBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const CircleBlue: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
CircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];
