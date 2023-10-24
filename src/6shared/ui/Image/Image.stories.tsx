import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/1app/providers/ThemeProvider';
import { Image, ImageAlign } from './Image';
import SampleImg from './image.png';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
    title: '6shared/Image',
    component: Image,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {
        width: 100,
        alt: 'Sample image',
        src: SampleImg,
        align: ImageAlign.LEFT,
    },
};

export const NormalDark: Story = {
    args: {
        width: 100,
        alt: 'Sample image',
        src: SampleImg,
        align: ImageAlign.LEFT,
    },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
