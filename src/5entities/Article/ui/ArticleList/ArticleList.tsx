import { classNames } from '6shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItemSkeleton } from '5entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.GRID ? 12 : 6)
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
    } = props;
    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
            target={target}
        />
    );

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
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
