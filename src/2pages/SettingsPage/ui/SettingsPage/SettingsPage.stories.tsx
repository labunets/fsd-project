import type { Meta, StoryObj } from '@storybook/react';
import SettingsPage from './SettingsPage';

type Story = StoryObj<typeof SettingsPage>;

const meta: Meta<typeof SettingsPage> = {
    title: '2pages/SettingsPage',
    component: SettingsPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
