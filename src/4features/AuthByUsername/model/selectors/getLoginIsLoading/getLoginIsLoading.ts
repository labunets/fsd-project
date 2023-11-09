import { StateSchema } from '@/1app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
