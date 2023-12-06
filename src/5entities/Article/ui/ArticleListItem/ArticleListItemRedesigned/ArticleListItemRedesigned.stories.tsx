import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

type Story = StoryObj<typeof ArticleListItemRedesigned>;

const meta: Meta<typeof ArticleListItemRedesigned> = {
    title: '5entities/ArticleListItem',
    component: ArticleListItemRedesigned,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
