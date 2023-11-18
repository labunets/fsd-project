import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

type Story = StoryObj<typeof ListBox>;

const meta: Meta<typeof ListBox> = {
    title: '6shared/Popovers/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div style={{ paddingTop: 150, paddingBottom: 150 }}><Story /></div>,
    ],
};

export default meta;

const items = [
    { content: 'Item 1', value: '1' },
    { content: 'Item 2', value: '2' },
    { content: 'Item 3', value: '3' },
];

export const Normal: Story = {
    args: { items, value: '123' },
};

export const BottomRight: Story = {
    args: { items, direction: 'bottom right', value: '123' },
};

export const BottomLeft: Story = {
    args: { items, direction: 'bottom left', value: '123' },
};

export const TopRight: Story = {
    args: { items, direction: 'top right', value: '123' },
};

export const TopLeft: Story = {
    args: { items, direction: 'top left', value: '123' },
};
