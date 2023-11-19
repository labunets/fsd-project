import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import HeartIcon from '../../../assets/icons/outline-heart.svg';
import ChevronRightIcon from '../../../assets/icons/chevron-right.svg';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '../../../const/theme';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'deprecated/6shared/Button',
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
        size: ButtonSize.S,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const BaseIcons: Story = {
    args: {
        children: 'Button',
        size: ButtonSize.M,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const BaseIconsLarge: Story = {
    args: {
        children: 'Button',
        size: ButtonSize.L,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const PrimaryActive: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
        active: true,
    },
};

export const PrimaryDisabled: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
        disabled: true,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.PRIMARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.SECONDARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const SecondaryActive: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.SECONDARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
        active: true,
    },
};

export const SecondaryDisabled: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.SECONDARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
        disabled: true,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.SECONDARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Tertiary: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.TERTIARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};

export const TertiaryActive: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.TERTIARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
        active: true,
    },
};

export const TertiaryDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.TERTIARY,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
TertiaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OTLINED,
        beforeIcon: <HeartIcon />,
        afterIcon: <ChevronRightIcon />,
    },
};
