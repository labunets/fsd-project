import { classNames } from '6shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from '3widgets/Page/Page';
import { HStack } from '6shared/ui/Stack';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.GRID ? 4 : 4)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation('article');

    const isGrid = view === ArticleView.GRID;

    const itemsPerRow = isGrid ? 1 : 1;
    const rowCount = isGrid
        ? Math.ceil(articles.length / itemsPerRow)
        : articles.length;

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={i}
                />,
            );
        }

        return (
            <div key={key} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    title={t('No articles found')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,
                registerChild,
                onChildScroll,
                scrollTop,
                isScrolling,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames('', {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            <List
                                height={height ?? 700}
                                width={width ? width - 20 : 700}
                                rowCount={rowCount}
                                rowHeight={isGrid ? 390 : 230}
                                rowRenderer={rowRenderer}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            <HStack gap="2">
                                {articles.map((item) => (
                                    <ArticleListItem
                                        article={item}
                                        view={view}
                                        className={cls.card}
                                        target={target}
                                        key={item.id}
                                    />
                                ))}
                            </HStack>
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
