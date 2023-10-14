import { StateSchema } from '1app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.error;
};
