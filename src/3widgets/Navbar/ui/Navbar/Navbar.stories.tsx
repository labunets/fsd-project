import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
    title: '3widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const LightLogged: Story = {
    args: {},
};
LightLogged.decorators = [
    StoreDecorator({ user: { authData: {} } }),
];
