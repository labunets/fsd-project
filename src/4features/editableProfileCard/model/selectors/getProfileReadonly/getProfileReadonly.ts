import { StateSchema } from '1app/providers/StoreProvider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
