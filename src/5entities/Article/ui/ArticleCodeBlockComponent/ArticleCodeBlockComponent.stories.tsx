import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

type Story = StoryObj<typeof ArticleCodeBlockComponent>;

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: '6shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
