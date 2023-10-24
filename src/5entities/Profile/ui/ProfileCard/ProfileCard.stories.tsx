import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/5entities/Currency';
import { Country } from '@/5entities/Country';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/1app/providers/ThemeProvider';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCard } from './ProfileCard';

type Story = StoryObj<typeof ProfileCard>;

const meta: Meta<typeof ProfileCard> = {
    title: '5entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const Light: Story = {
    args: {
        data: {
            firstname: 'Den',
            lastname: 'Lab',
            username: 'denlab',
            age: 25,
            currency: Currency.UAH,
            country: Country.UA,
            city: 'Kyiv',
        },
    },
};

export const LightError: Story = {
    args: {
        error: 'Error',
    },
};

export const LightLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const Dark: Story = {
    args: {
        data: {
            firstname: 'Den',
            lastname: 'Lab',
            username: 'denlab',
            age: 25,
            currency: Currency.UAH,
            country: Country.UA,
            city: 'Kyiv',
        },
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
