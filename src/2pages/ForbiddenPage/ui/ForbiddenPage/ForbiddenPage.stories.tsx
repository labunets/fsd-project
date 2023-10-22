import type { Meta, StoryObj } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

type Story = StoryObj<typeof ForbiddenPage>;

const meta: Meta<typeof ForbiddenPage> = {
    title: '2pages/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
