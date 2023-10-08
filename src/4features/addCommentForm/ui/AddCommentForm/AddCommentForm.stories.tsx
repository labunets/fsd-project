import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '6shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

type Story = StoryObj<typeof AddCommentForm>;

const meta: Meta<typeof AddCommentForm> = {
    title: '4features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
};
Normal.decorators = [
    StoreDecorator({}),
];
