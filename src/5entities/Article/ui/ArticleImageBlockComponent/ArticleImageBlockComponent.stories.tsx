import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

type Story = StoryObj<typeof ArticleImageBlockComponent>;

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: '6shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
