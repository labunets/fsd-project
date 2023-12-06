import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/5entities/Currency';
import { Country } from '@/5entities/Country';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof ProfileCardDeprecated>;

const meta: Meta<typeof ProfileCardDeprecated> = {
    title: 'deprecated/5entities/ProfileCard',
    component: ProfileCardDeprecated,
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
Dark.decorators = [ThemeDecorator(Theme.DARK)];
