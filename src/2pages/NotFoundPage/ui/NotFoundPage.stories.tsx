import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof NotFoundPage>;

const meta: Meta<typeof NotFoundPage> = {
    title: '2pages/NotFoundPage',
    component: NotFoundPage,
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
