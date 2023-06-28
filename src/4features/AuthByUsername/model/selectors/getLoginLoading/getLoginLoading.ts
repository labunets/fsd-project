import { StateSchema } from '1app/providers/StoreProvider';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
