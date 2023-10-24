import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/5entities/Profile';
import { ThunkConfig } from '@/1app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
