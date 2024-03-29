import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof CountrySelect>;

const meta: Meta<typeof CountrySelect> = {
    title: '5entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => <div style={{ paddingTop: 150, paddingBottom: 150 }}><Story /></div>,
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
