import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

type Story = StoryObj<typeof CommentCard>;

const meta: Meta<typeof CommentCard> = {
    title: '5entities/CommentCard',
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
