import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

type Story = StoryObj<typeof CommentList>;

const meta: Meta<typeof CommentList> = {
    title: '5entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;

const comments = [
    {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'user1' },
    },
    {
        id: '2',
        text: 'some comment 2',
        user: { id: '2', username: 'user2' },
    },
];

export const Normal: Story = {
    args: {
        comments,
    },
};

export const Loading: Story = {
    args: {
        comments,
        isLoading: true,
    },
};

export const Empty: Story = {
    args: {
        comments: [],
    },
};
