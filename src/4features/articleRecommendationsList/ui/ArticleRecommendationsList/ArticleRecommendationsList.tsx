import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/5entities/Article';
import { Text } from '@/6shared/ui/Text';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { VStack } from '@/6shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="1" className={classNames('', {}, [className])}>
            <Text title={t('Recommend')} />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
