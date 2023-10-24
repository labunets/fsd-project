import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme, useTheme } from '@/1app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

type Story = StoryObj<typeof LangSwitcher>;

const meta: Meta<typeof LangSwitcher> = {
    title: '4features/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
};

export default meta;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
