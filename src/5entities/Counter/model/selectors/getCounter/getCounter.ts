import { StateSchema } from '@/1app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
