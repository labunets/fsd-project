import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '1app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
