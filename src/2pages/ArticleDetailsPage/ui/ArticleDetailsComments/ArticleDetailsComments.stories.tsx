import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from '@/5entities/Comment';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

type Story = StoryObj<typeof ArticleDetailsComments>;

const meta: Meta<typeof ArticleDetailsComments> = {
    title: '2pages/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;

export const Normal: Story = {
    args: {
        id: '1',
    },
};
