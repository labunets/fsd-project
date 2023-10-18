import { Currency } from '5entities/Currency';
import { Country } from '5entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    firstname: 'Den',
    lastname: 'Lab',
    username: 'denlab',
    age: 25,
    currency: Currency.UAH,
    country: Country.UA,
    city: 'Kyiv',
};
describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: 'denlab',
            }),
        )).toEqual({
            form: {
                username: 'denlab',
            },
        });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('update profile service fullfield', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
