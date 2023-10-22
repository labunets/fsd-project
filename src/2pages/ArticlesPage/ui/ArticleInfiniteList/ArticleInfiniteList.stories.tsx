import type { Meta, StoryObj } from '@storybook/react';
import { ArticleInfiniteList } from './ArticleInfiniteList';

type Story = StoryObj<typeof ArticleInfiniteList>;

const meta: Meta<typeof ArticleInfiniteList> = {
    title: '2pages/ArticleInfiniteList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
