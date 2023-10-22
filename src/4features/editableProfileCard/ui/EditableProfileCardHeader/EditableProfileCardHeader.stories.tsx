import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

type Story = StoryObj<typeof EditableProfileCardHeader>;

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: '4features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
