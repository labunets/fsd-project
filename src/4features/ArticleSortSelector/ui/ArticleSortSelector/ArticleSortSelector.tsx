import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Select, SelectOption } from '@/6shared/ui/deprecated/Select';
import { SortOrder } from '@/6shared/types/sort';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleSortField } from '@/5entities/Article';
import { ToggleFeatures } from '@/6shared/lib/features';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { ListBox } from '@/6shared/ui/redesigned/Popups';
import { Text } from '@/6shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('created'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('title'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('views'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    className={classNames(
                        cls.ArticleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="1">
                        <Text text={t('Sort by')} size="s" />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
            off={
                <HStack max={false}>
                    <Select<ArticleSortField>
                        options={sortFieldOptions}
                        label={t('Sort by')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select<SortOrder>
                        options={orderOptions}
                        label={t('order')}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </HStack>
            }
        />
    );
});
