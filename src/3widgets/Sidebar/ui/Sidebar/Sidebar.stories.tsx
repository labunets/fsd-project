import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/6shared/const/theme';
import { FeaturesFlagsDecorator } from '@/6shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

type Story = StoryObj<typeof Sidebar>;

const meta: Meta<typeof Sidebar> = {
    title: '3widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;

export const Light: Story = {
    args: {},
};
Light.decorators = [StoreDecorator({})];

export const LightAuthed: Story = {
    args: {},
};
LightAuthed.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const LightAuthedRedesigned: Story = {
    args: {},
};
LightAuthedRedesigned.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
    FeaturesFlagsDecorator({
        isAppRedesigned: true,
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
