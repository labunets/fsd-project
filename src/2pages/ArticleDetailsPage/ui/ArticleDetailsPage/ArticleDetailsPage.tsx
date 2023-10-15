import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from '5entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from '6shared/ui/Text/Text';
import { CommentList } from '5entities/Comment';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from '6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from '4features/addCommentForm';
import { Page } from '3widgets/Page/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    fetchArticlesRecommendations,
} from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';

interface ArticlesDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesRecommendations());
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Article not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    title={t('Recommend')}
                    className={cls.commentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text
                    title={t('Comments')}
                    className={cls.commentTitle}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
