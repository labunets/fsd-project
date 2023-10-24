import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/1app/providers/ThemeProvider';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleList } from './ArticleList';

type Story = StoryObj<typeof ArticleList>;

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Що нового у JS за 2022 рік?',
    img: 'https://placehold.co/300x200',
    views: 1022,
    createdAt: '05.10.2023',
    user: { id: '1', username: 'John Doe', avatar: 'https://placehold.co/120?text=JD' },
    type: [
        'IT',
        'SCIENCE',
    ],
    blocks: [],
} as Article;

const meta: Meta<typeof ArticleList> = {
    title: '5entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    args: {
        articles: [
            { ...article, id: '1' },
            { ...article, id: '2' },
            { ...article, id: '3' },
        ],
    },
};

export default meta;

export const NormalGrid: Story = {
    args: {
        isLoading: false,
    },
};

export const NormalList: Story = {
    args: {
        isLoading: false,
        view: ArticleView.LIST,
    },
};

export const LoadingGrid: Story = {
    args: {
        isLoading: true,
        view: ArticleView.GRID,
    },
};

export const LoadingList: Story = {
    args: {
        isLoading: true,
        view: ArticleView.LIST,
    },
};

export const NormalGridDark: Story = {
    args: {
        isLoading: false,
        view: ArticleView.GRID,
    },
};
NormalGridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalListDark: Story = {
    args: {
        isLoading: false,
        view: ArticleView.LIST,
    },
};
NormalListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingGridDark: Story = {
    args: {
        isLoading: true,
        view: ArticleView.GRID,
    },
};
LoadingGridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingListDark: Story = {
    args: {
        isLoading: true,
        view: ArticleView.LIST,
    },
};
LoadingListDark.decorators = [ThemeDecorator(Theme.DARK)];
