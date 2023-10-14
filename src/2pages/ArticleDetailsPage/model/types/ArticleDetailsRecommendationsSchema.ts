import { EntityState } from '@reduxjs/toolkit';
import { Article } from '5entities/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
