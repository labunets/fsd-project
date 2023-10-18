import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

type Story = StoryObj<typeof ListBox>;

const meta: Meta<typeof ListBox> = {
    title: '6shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
