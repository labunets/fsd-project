import { userActions } from '5entities/User';
import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '5entities/Currency';
import { Country } from '5entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    firstname: 'Den',
    lastname: 'Lab',
    username: 'denlab',
    age: 25,
    currency: Currency.UAH,
    country: Country.UA,
    city: 'Kyiv',
};
describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
