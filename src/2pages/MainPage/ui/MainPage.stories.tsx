import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof MainPage>;

const meta: Meta<typeof MainPage> = {
    title: '2pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};

export default meta;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
