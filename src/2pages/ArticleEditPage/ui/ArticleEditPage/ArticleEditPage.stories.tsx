import type { Meta, StoryObj } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

type Story = StoryObj<typeof ArticleEditPage>;

const meta: Meta<typeof ArticleEditPage> = {
    title: '2pages/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
