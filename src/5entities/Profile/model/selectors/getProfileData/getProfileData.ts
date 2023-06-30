import { StateSchema } from '1app/providers/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
