import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/5entities/Article';
import { ThunkConfig } from '@/1app/providers/StoreProvider';

export const fetchArticlesRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticlesRecommendations', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 4,
            },
        });

        if (!response.data) {
            throw new Error('error');
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
