import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Page } from '@/3widgets/Page';
import { Text, TextSize } from '@/6shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/6shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/ArticlesPageSlice';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <VStack gap="2">
                    <Text title={t('Articles')} size={TextSize.L} />
                    <ArticlesPageFilters />
                    <ArticleInfiniteList />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
