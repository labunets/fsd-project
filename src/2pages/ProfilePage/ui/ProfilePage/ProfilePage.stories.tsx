import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/5entities/Currency';
import { Country } from '@/5entities/Country';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof ProfilePage>;

const meta: Meta<typeof ProfilePage> = {
    title: '2pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            form: {
                firstname: 'Den',
                lastname: 'Lab',
                username: 'denlab',
                age: 25,
                currency: Currency.UAH,
                country: Country.UA,
                city: 'Kyiv',
            },
        },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({})];
