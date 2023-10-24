import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

type Story = StoryObj<typeof NotificationList>;

const meta: Meta<typeof NotificationList> = {
    title: 'NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
