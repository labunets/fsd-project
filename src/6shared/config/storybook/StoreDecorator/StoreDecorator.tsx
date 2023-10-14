import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '1app/providers/StoreProvider';
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '5entities/Profile';
import { ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '5entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '4features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '2pages/ArticleDetailsPage/model/slices';

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
