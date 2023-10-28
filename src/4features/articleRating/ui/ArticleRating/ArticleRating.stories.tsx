import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';

type Story = StoryObj<typeof ArticleRating>;

const meta: Meta<typeof ArticleRating> = {
    title: '4features/articleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    })],
};

export default meta;

export const Normal: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
};

export const NoRating: Story = {
    args: {
        articleId: '1',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
