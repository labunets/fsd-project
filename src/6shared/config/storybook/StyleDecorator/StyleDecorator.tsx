// eslint-disable-next-line rel-path-check/layer-imports
import '@/1app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';
import React from 'react';

export const StyleDecorator: Decorator = (Story: StoryFn) => <Story />;
