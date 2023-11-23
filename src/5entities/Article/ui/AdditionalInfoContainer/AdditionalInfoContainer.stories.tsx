import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

type Story = StoryObj<typeof AdditionalInfoContainer>;

const meta: Meta<typeof AdditionalInfoContainer> = {
    title: 'AdditionalInfoContainer',
    component: AdditionalInfoContainer,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {},
};
