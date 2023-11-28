import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '@/5entities/Article';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/6shared/lib/features';

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
        <VStack
            gap="1"
            className={classNames('', {}, [className])}
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text title={t('Recommend')} size="l" />}
                off={<TextDeprecated title={t('Recommend')} />}
            />

            <ArticleList articles={articles} target="_blank" />
        </VStack>
    );
});
