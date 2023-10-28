import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

type Story = StoryObj<typeof StarRating>;

const meta: Meta<typeof StarRating> = {
    title: '6shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
