import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

type Story = StoryObj<typeof CommentList>;

const meta: Meta<typeof CommentList> = {
    title: '6shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
