import { StateSchema } from '@/1app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
