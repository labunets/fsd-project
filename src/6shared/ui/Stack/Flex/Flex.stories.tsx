import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
    title: '6shared/Flex',
    component: Flex,
    tags: ['autodocs'],
};

export default meta;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowCenter: Story = {
    args: {
        justify: 'center',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowBetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowGap0: Story = {
    args: {
        gap: '0',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowGap1: Story = {
    args: {
        gap: '1',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowGap2: Story = {
    args: {
        gap: '2',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const RowGap3: Story = {
    args: {
        gap: '3',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const ColumnGap0: Story = {
    args: {
        gap: '0',
        direction: 'column',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const ColumnGap1: Story = {
    args: {
        gap: '1',
        direction: 'column',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const ColumnGap2: Story = {
    args: {
        gap: '2',
        direction: 'column',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};

export const ColumnGap3: Story = {
    args: {
        gap: '3',
        direction: 'column',
        children: (
            <>
                <div>First</div>
                <div>Second</div>
                <div>Third</div>
                <div>Fourth</div>
            </>
        ),
    },
};
