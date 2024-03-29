import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
    title: '4features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const Light: Story = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: 'John', password: '12345' },
    }),
];

export const Dark: Story = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'John', password: '12345' },
    }),
];

export const Loading: Story = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: 'John', password: '12345', isLoading: true,
    },
})];

export const Error: Story = {};
Error.decorators = [StoreDecorator({
    loginForm: {
        username: 'John', password: '12345', isLoading: false, error: 'Error',
    },
})];
