import { StateSchema } from '@/1app/providers/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
