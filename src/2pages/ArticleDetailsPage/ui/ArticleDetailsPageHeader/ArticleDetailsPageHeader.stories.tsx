import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

type Story = StoryObj<typeof ArticleDetailsPageHeader>;

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: '2pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
