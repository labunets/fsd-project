import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card } from './Card';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
    title: '6shared/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {
        children: <Text title="Title" text="lorem ipsum sit amet" />,
    },
};
