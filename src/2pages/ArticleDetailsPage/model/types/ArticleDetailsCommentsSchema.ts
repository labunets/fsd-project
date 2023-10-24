import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/5entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
