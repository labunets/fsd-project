import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

type Story = StoryObj<typeof Popover>;

const meta: Meta<typeof Popover> = {
    title: '6shared/Popovers/Popover',
    component: Popover,
    tags: ['autodocs'],
    decorators: [
        (Story) => <div style={{ paddingTop: 150, paddingBottom: 150 }}><Story /></div>,
    ],
};

export default meta;

export const Normal: Story = {
    args: {
        trigger: 'Popup',
    },
};
