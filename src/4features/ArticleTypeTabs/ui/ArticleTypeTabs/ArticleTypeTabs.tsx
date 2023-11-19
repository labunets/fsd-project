import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs as DeprecatedTabs } from '@/6shared/ui/deprecated/Tabs';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '@/5entities/Article';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Tabs } from '@/6shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('ALL'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('SCIENCE'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('ECONOMICS'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    label={t('Type')}
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <DeprecatedTabs
                    label={t('Type')}
                    className={classNames(cls.ArticleTypeTabs, {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    );
});
