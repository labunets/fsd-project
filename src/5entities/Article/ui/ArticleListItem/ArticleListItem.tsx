import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text, TextSize } from '6shared/ui/Text/Text';
import EyeIcon from '6shared/assets/icons/outline-eye.svg';
import { Card } from '6shared/ui/Card/Card';
import { Avatar, AvatarSize } from '6shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const image = <div className={cls.imageWrapper} style={{ backgroundImage: `url(${article.img})` }} />;
    const types = <Text text={article.type.join(', ')} size={TextSize.S} className={cls.types} />;
    const date = <Text text={article.createdAt} size={TextSize.S} className={cls.date} />;
    const views = (
        <div className={cls.viewsWrapper}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article.views)} size={TextSize.S} className={cls.views} />
        </div>
    );

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card} onClick={onOpenArticle}>
                    {image}
                    <div className={cls.detailsWrapper}>
                        <div className={cls.title}>
                            <Text title={article.title} size={TextSize.L} />
                            <Text text={article.subtitle} />
                        </div>
                        <div className={cls.infoWrapper}>
                            <Avatar size={AvatarSize.SMALL} src={article.user.avatar} />
                            <Text text={article.user.username} size={TextSize.M} className={cls.username} />
                            {views}
                            {types}
                            {date}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                {image}
                <div className={cls.title}>
                    <Text title={article.title} />
                    <Text text={article.subtitle} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {date}
                    {views}
                </div>
            </Card>
        </div>
    );
});
