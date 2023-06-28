import { StateSchema } from '1app/providers/StoreProvider';
import { LoginSchema } from '../../types/LoginSchema';

export const getLoginState = (state: StateSchema): LoginSchema => state?.loginForm;
