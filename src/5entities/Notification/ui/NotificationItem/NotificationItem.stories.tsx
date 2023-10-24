import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

type Story = StoryObj<typeof NotificationItem>;

const meta: Meta<typeof NotificationItem> = {
    title: 'NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
