import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
    title: '6shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
