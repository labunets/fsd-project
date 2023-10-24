import { StateSchema } from '@/1app/providers/StoreProvider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
