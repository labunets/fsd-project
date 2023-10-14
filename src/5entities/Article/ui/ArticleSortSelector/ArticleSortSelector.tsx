import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from '6shared/ui/Select/Select';
import { ArticleSortField } from '5entities/Article/model/types/article';
import { SortOrder } from '6shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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
    ], [t]);

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('order')}
                value={order}
                onChange={changeOrderHandler}
            />
        </div>
    );
});
