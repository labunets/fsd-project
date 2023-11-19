import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/6shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/4features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/4features/ArticleTypeTabs';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/5entities/Article';
import { SortOrder } from '@/6shared/types/sort';
import { Input } from '@/6shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type,
    } = props;
    const { t } = useTranslation();

    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])}>
            <VStack gap="3">
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Search')}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});
