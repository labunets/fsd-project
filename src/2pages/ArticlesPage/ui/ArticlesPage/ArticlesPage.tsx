import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from '5entities/Article';
import { Text, TextSize, TextTheme } from '6shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '3widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { VStack } from '6shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

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
        <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <VStack gap="2">
                    <Text title={t('Articles')} size={TextSize.L} />
                    <ArticlesPageFilters />
                    <ArticleList
                        articles={articles}
                        isLoading={isLoading}
                        view={view}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
