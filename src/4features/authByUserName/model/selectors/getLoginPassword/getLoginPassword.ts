import { StateSchema } from '1app/providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
