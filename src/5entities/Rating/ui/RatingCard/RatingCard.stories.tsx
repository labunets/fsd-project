import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

type Story = StoryObj<typeof RatingCard>;

const meta: Meta<typeof RatingCard> = {
    title: 'RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
