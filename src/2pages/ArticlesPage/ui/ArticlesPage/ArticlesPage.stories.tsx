import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

type Story = StoryObj<typeof ArticlesPage>;

const meta: Meta<typeof ArticlesPage> = {
    title: '6shared/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
