import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from '5entities/Article';
import { Text, TextSize } from '6shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '3widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
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
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <Text title={t('Articles')} className={cls.title} size={TextSize.L} />
                <Text text={t('Error')} className={cls.error} size={TextSize.L} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <Text title={t('Articles')} className={cls.title} size={TextSize.L} />
                <ArticlesPageFilters className={cls.filters} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    view={view}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
