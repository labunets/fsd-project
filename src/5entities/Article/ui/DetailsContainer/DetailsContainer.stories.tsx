import type { Meta, StoryObj } from '@storybook/react';
import { DetailsContainer } from './DetailsContainer';

type Story = StoryObj<typeof DetailsContainer>;

const meta: Meta<typeof DetailsContainer> = {
    title: '5entities/DetailsContainer',
    component: DetailsContainer,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
