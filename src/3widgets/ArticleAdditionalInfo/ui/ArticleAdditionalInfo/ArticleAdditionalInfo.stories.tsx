import type { Meta, StoryObj } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

type Story = StoryObj<typeof ArticleAdditionalInfo>;

const meta: Meta<typeof ArticleAdditionalInfo> = {
    title: 'ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
