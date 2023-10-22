import { StateSchema } from '1app/providers/StoreProvider';

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
