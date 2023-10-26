import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

type Story = StoryObj<typeof ArticleRating>;

const meta: Meta<typeof ArticleRating> = {
    title: '4features/articleRating',
    component: ArticleRating,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
