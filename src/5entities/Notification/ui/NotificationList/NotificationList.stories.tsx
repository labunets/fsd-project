import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/6shared/config/storybook/StoreDecorator/StoreDecorator';

type Story = StoryObj<typeof NotificationList>;

const meta: Meta<typeof NotificationList> = {
    title: '5entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'title 1',
                        description: 'description 1',
                    },
                    {
                        id: '2',
                        title: 'title 2',
                        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    },
                    {
                        id: '3',
                        title: 'title 3',
                        description: 'description 3',
                    },
                ],
            },
        ],
    },
};

export default meta;

export const Normal: Story = {
    args: {},
};
