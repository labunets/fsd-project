import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
    title: '4features/LoginForm',
    component: LoginForm,
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
