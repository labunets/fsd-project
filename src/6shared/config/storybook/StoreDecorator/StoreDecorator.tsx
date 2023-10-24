import { StoryFn } from '@storybook/react';
import { loginReducer } from '@/4features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsReducer } from '@/5entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/4features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/2pages/ArticleDetailsPage/model/slices';
import { profileReducer } from '@/4features/editableProfileCard/model/slice/profileSlice';
import { ReducersList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/1app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
