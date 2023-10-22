import type { Meta, StoryObj } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';

type Story = StoryObj<typeof AdminPanelPage>;

const meta: Meta<typeof AdminPanelPage> = {
    title: '2pages/AdminPanelPage',
    component: AdminPanelPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
