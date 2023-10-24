import { StateSchema } from '@/1app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
