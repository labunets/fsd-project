import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

type Story = StoryObj<typeof Code>;

const meta: Meta<typeof Code> = {
    title: 'deprecated/6shared/Code',
    component: Code,
    tags: ['autodocs'],
};

export default meta;

export const Normal: Story = {
    args: {
        text: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json')) ;\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
};
