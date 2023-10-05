import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

type Story = StoryObj<typeof ArticleDetailsPage>;

const meta: Meta<typeof ArticleDetailsPage> = {
    title: '2pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
