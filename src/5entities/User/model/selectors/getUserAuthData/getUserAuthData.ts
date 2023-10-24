import { StateSchema } from '@/1app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
