import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

type Story = StoryObj<typeof ArticleListItemDeprecated>;

const meta: Meta<typeof ArticleListItemDeprecated> = {
    title: 'deprecated/5entities/ArticleListItem',
    component: ArticleListItemDeprecated,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
