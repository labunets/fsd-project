import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Image, ImageAlign } from './Image';
import SampleImg from './image.png';
import { Theme } from '@/6shared/const/theme';

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
