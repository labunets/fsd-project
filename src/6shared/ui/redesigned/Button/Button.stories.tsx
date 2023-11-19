import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import HeartIcon from '../../../assets/icons/outline-heart.svg';
import ChevronRightIcon from '../../../assets/icons/chevron-right.svg';
import { Button } from './Button';
import { Theme } from '../../../const/theme';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: '6shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Base: Story = {
    args: {
        children: 'Button',
    },
};

export const BaseActive: Story = {
    args: {
        children: 'Button',
        active: true,
    },
};

export const BaseDark: Story = {
    args: {
        children: 'Button',
    },
};
BaseDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BaseIconsSmall: Story = {
    args: {
        children: 'Button',
        size: 's',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const BaseIcons: Story = {
    args: {
        children: 'Button',
        size: 'm',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const BaseIconsLarge: Story = {
    args: {
        children: 'Button',
        size: 'l',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        variant: 'clear',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        variant: 'clear',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        children: 'Button',
        variant: 'outlined',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Button',
        variant: 'outlined',
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
