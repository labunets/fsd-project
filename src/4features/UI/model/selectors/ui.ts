import { StateSchema } from '1app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state: StateSchema) => state.ui.scroll;
export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateSchema, path: string) => path || '',
    (scroll: {[index: string]:any}, path) => scroll[path] || 0,
);
