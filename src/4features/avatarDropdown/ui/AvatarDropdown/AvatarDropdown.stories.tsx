import type { Meta, StoryObj } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';

type Story = StoryObj<typeof AvatarDropdown>;

const meta: Meta<typeof AvatarDropdown> = {
    title: '4features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
