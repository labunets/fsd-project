import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

type Story = StoryObj<typeof ArticleRecommendationsList>;

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: '4features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
