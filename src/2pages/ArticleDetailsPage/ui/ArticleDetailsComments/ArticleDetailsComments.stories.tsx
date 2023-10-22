import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

type Story = StoryObj<typeof ArticleDetailsComments>;

const meta: Meta<typeof ArticleDetailsComments> = {
    title: '2pages/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
