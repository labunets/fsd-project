import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
    title: '6shared/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        label: 'Label',
        placeholder: 'Placeholder',
    },
};

export default meta;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
