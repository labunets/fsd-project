import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
    title: 'deprecated/6shared/TabsDeprecated',
    component: Tabs,
    tags: ['autodocs'],
};

export default meta;

const tabs = [
    {
        value: 'tab1',
        content: 'Tab 1',
    },
    {
        value: 'tab2',
        content: 'Tab 2',
    },
    {
        value: 'tab3',
        content: 'Tab 3',
    },
];

export const Normal: Story = {
    args: {
        tabs,
    },
};

export const Active: Story = {
    args: {
        tabs: [
            ...tabs,
            {
                value: 'tab4',
                content: 'Tab 4',
            },
        ],
        value: 'tab4',
        onTabClick: action('onTabClick'),
    },
};
