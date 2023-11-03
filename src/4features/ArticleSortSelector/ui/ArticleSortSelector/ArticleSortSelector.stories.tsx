import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

type Story = StoryObj<typeof ArticleSortSelector>;

const meta: Meta<typeof ArticleSortSelector> = {
    title: '4features/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
