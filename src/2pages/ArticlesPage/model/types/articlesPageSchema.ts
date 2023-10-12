import { Article, ArticleView } from '5entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    view: ArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited?: boolean;
}
