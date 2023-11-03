import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';

type Story = StoryObj<typeof ArticleViewSelector>;

const meta: Meta<typeof ArticleViewSelector> = {
    title: '4features/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
