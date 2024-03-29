import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
    title: 'deprecated/6shared/Select',
    component: Select,
    tags: ['autodocs'],
    args: {
        label: 'Label',
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' },
            { value: '3', content: 'Option 3' },
        ],
    },
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
