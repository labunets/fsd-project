import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '5entities/User';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from '6shared/const/localstorage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps>(
    'login/loginByUserName',
    async (authData: LoginByUserNameProps, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://Kuzma.local:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
