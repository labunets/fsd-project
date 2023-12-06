import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

type Story = StoryObj<typeof ProfileCardRedesigned>;

const meta: Meta<typeof ProfileCardRedesigned> = {
    title: '5entities/ProfileCard',
    component: ProfileCardRedesigned,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
