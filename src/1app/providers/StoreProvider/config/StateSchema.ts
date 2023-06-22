import { CounterSchema } from '5entities/Counter';
import { UserSchema } from '5entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
