import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

type Story = StoryObj<typeof ArticleTextBlockComponent>;

const meta: Meta<typeof ArticleTextBlockComponent> = {
    title: '6shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
