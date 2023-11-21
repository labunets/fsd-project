import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text, TextSize } from '@/6shared/ui/deprecated/Text';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton as ArticleListItemSkeletonDeprecated } from '../ArticleListItem/ArticleListItemDeprecated/ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeleton as ArticleListItemSkeletonRedesigned } from '../ArticleListItem/ArticleListItemRedesigned/ArticleListItemSkeletonRedesigned';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/6shared/lib/features';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleListItemRedesigned } from '../ArticleListItem/ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from '../ArticleListItem/ArticleListItemDeprecated/ArticleListItemDeprecated';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 15 : 6)
        .fill(0)
        .map((item, index) => (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <ArticleListItemSkeletonRedesigned
                        className={cls.card}
                        key={index}
                        view={view}
                    />
                }
                off={
                    <ArticleListItemSkeletonDeprecated
                        className={cls.card}
                        key={index}
                        view={view}
                    />
                }
            />
        ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.GRID, isLoading, target } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    gap="1"
                    max
                    wrap="wrap"
                    className={classNames(cls.ArticleListRedesigned, {}, [className, cls[view]])}
                    data-testid="ArticleList"
                >
                    {articles.map((item) => (
                        <ArticleListItemRedesigned
                            article={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                    {/* {getSkeletons(view)} */}
                </HStack>
            }
            off={
                <div
                    data-testid="ArticleList"
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {articles.map((item) => (
                        <ArticleListItemDeprecated
                            article={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </div>
            }
        />
    );
});
