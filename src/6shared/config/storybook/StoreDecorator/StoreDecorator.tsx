import { StoryFn } from '@storybook/react';
import { loginReducer } from '@/4features/AuthByUsername/testing';
import { articleDetailsReducer } from '@/5entities/Article/testing';
import { addCommentFormReducer } from '@/4features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/2pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/4features/editableProfileCard/testing';
import { ReducersList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { StateSchema, StoreProvider } from '@/1app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
