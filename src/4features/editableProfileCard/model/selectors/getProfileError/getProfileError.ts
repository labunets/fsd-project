import { StateSchema } from '@/1app/providers/StoreProvider';

export const getProfileError = (state: StateSchema) => state.profile?.error;
