import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof CommentCard>;

const meta: Meta<typeof CommentCard> = {
    title: '5entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
};

export default meta;

const comment = {
    id: '1',
    text: 'comment 1',
    user: {
        id: '1',
        username: 'user 1',
        avatar: 'https://placehold.co/120?text=User',
    },
};

export const Normal: Story = {
    args: {
        comment,
    },
};

export const Loading: Story = {
    args: {
        comment,
        isLoading: true,
    },
};

export const LoadingDark: Story = {
    args: {
        comment,
        isLoading: true,
    },
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
