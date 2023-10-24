import { Currency } from '@/5entities/Currency';
import { Country } from '@/5entities/Country';
import { StateSchema } from '@/1app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return data', () => {
        const data = {
            firstname: 'Den',
            lastname: 'Lab',
            username: 'denlab',
            age: 25,
            currency: Currency.UAH,
            country: Country.UA,
            city: 'Kyiv',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
