import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

type Story = StoryObj<typeof ArticlesPageFilters>;

const meta: Meta<typeof ArticlesPageFilters> = {
    title: '2pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
