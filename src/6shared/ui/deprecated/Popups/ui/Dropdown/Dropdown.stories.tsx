import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

type Story = StoryObj<typeof Dropdown>;

const meta: Meta<typeof Dropdown> = {
    title: 'deprecated/6shared/Popovers/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ paddingTop: 150, paddingBottom: 150 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

export const Normal: Story = {
    args: {
        trigger: <Button>Menu</Button>,
        items: [
            {
                content: 'Item 1',
            },
            {
                content: 'Item 2',
            },
            {
                content: 'Item 3',
            },
        ],
    },
};
