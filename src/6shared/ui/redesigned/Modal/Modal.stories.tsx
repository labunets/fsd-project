import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/6shared/const/theme';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
    title: 'deprecated/6shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {},
};

export default meta;

export const Light: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
