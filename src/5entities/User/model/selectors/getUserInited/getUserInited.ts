import { StateSchema } from '1app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.user._inited;
