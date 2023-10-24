import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/1app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';

type Story = StoryObj<typeof CountrySelect>;

const meta: Meta<typeof CountrySelect> = {
    title: '5entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
};

export default meta;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
