import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text, TextSize } from '@/6shared/ui/Text/Text';
import EyeIcon from '@/6shared/assets/icons/outline-eye.svg';
import { Card } from '@/6shared/ui/Card/Card';
import { Avatar, AvatarSize } from '@/6shared/ui/Avatar/Avatar';
import { RoutePath } from '@/6shared/config/routeConfig/routeConfig';
import { AppLink } from '@/6shared/ui/AppLink/AppLink';
import { HStack, VStack } from '@/6shared/ui/Stack';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { Article } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation();

    const image = <div className={cls.imageWrapper} style={{ backgroundImage: `url(${article.img})` }} />;
    const types = <Text text={article.type.join(', ')} size={TextSize.S} className={cls.types} />;
    const date = <Text text={article.createdAt} size={TextSize.S} className={cls.date} />;
    const views = (
        <HStack gap="0" className={cls.viewsWrapper} align="center">
            <EyeIcon className={cls.icon} />
            <Text text={String(article.views)} size={TextSize.S} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.LIST) {
        return (
            <AppLink
                target={target}
                to={RoutePath.article_details + article.id}
                className={classNames(cls.link, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    {image}
                    <VStack className={cls.detailsWrapper}>
                        <HStack gap="0" max={false}>
                            <Avatar size={AvatarSize.SMALL} src={article.user.avatar} />
                            <Text text={article.user.username} size={TextSize.M} className={cls.username} />
                        </HStack>
                        <Text title={article.title} />
                        <Text text={article.subtitle} />
                        <HStack gap="0" max={false} justify="between">
                            {views}
                            {types}
                            {date}
                        </HStack>
                    </VStack>
                </Card>
            </AppLink>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <VStack>
                    {image}
                    <VStack gap="2" className={cls.detailsWrapper}>
                        <VStack gap="0">
                            <Text title={article.title} />
                            <Text text={article.subtitle} />
                        </VStack>
                        <HStack className={cls.infoWrapper}>
                            {types}
                            {date}
                            {views}
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
