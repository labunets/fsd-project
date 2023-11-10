import {
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '@/5entities/Article';
import { StateSchema } from '@/1app/providers/StoreProvider';
import { buildSelector } from '@/6shared/lib/store';

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.GRID;
export const getArticlesPageNumber = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 12;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited || false;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order || 'asc';
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;

export const [useArticleItemById] = buildSelector(
    (state, id: string) => state.articlesPage?.entities[id],
);
