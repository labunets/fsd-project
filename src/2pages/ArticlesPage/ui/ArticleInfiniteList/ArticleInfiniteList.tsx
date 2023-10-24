import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/5entities/Article';
import { Page } from '@/3widgets/Page/Page';
import { Text, TextSize, TextTheme } from '@/6shared/ui/Text/Text';
import { useInitialEffect } from '@/6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticles } from '../../model/slices/ArticlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();
    const error = useSelector(getArticlesPageError);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page>
                <Text title={t('Articles')} size={TextSize.L} />
                <Text text={t('Error')} theme={TextTheme.ERROR} size={TextSize.L} />
            </Page>
        );
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={className}
        />
    );
});
