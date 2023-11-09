import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/5entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/6shared/const/localstorage';
import { ThunkConfig } from '@/1app/providers/StoreProvider';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUserNameProps,
    ThunkConfig<string>
>('common/loginByUsername', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
