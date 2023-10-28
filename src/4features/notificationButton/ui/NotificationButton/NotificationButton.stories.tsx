import type { Meta, StoryObj } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

type Story = StoryObj<typeof NotificationButton>;

const meta: Meta<typeof NotificationButton> = {
    title: '4features/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
