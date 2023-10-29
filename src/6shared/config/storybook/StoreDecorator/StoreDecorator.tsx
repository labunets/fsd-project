import { StoryFn } from '@storybook/react';
// TODO: remove eslint-disable
// eslint-disable-next-line rel-path-check/pub-api-imports
import { loginReducer } from '@/4features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line rel-path-check/pub-api-imports
import { articleDetailsReducer } from '@/5entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line rel-path-check/pub-api-imports
import { addCommentFormReducer } from '@/4features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line rel-path-check/pub-api-imports
import { articleDetailsPageReducer } from '@/2pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line rel-path-check/pub-api-imports
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
