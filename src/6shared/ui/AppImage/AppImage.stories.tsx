import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

type Story = StoryObj<typeof AppImage>;

const meta: Meta<typeof AppImage> = {
    title: 'AppImage',
    component: AppImage,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
