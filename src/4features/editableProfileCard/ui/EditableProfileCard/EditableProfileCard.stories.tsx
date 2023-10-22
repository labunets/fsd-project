import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

type Story = StoryObj<typeof EditableProfileCard>;

const meta: Meta<typeof EditableProfileCard> = {
    title: '4features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
