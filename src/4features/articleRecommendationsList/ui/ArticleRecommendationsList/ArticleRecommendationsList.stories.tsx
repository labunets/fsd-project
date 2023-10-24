import type { Meta, StoryObj } from '@storybook/react';
import { Article, ArticleType } from '@/5entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Що нового у JS за 2022 рік?',
    img: 'https://placehold.co/300x200',
    views: 1022,
    createdAt: '05.10.2023',
    user: { id: '1', username: 'John Doe' },
    type: [ArticleType.IT],
    blocks: [],
};

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: '4features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};

export default meta;

export const Normal: Story = {
    args: {},
};
