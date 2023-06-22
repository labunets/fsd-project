import { CounterSchema } from '5entities/Counter';
import { UserSchema } from '5entities/User';
import { LoginSchema } from '4features/authByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}
