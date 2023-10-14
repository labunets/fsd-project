import { LoginSchema } from '4features/AuthByUsername';
import { ProfileSchema } from '5entities/Profile';
import { UserSchema } from '5entities/User';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CombinedState } from 'redux';
import { ArticleDetailsSchema } from '5entities/Article';
import { AddCommentFormSchema } from '4features/addCommentForm';
import { ArticlesPageSchema } from '2pages/ArticlesPage';
import { UISchema } from '4features/UI';
import { ArticleDetailsPageSchema } from '2pages/ArticleDetailsPage';

export interface StateSchema {
    user: UserSchema;
    ui: UISchema;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
