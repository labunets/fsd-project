import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

type Story = StoryObj<typeof ArticleTypeTabs>;

const meta: Meta<typeof ArticleTypeTabs> = {
    title: '5entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
