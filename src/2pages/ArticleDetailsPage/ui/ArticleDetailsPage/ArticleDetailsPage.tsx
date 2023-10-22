import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from '5entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '3widgets/Page/Page';
import { VStack } from '6shared/ui/Stack';
import { ArticleRecommendationsList } from '4features/articleRecommendationsList';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

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
                <VStack gap="3">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
