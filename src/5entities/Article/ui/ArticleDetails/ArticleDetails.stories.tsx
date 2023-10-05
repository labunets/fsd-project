import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';

type Story = StoryObj<typeof ArticleDetails>;

const meta: Meta<typeof ArticleDetails> = {
    title: '6shared/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
