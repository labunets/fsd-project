import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

type Story = StoryObj<typeof UiDesignSwitcher>;

const meta: Meta<typeof UiDesignSwitcher> = {
    title: '4features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
