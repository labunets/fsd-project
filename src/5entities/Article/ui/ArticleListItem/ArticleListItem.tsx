import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text, TextSize } from '@/6shared/ui/deprecated/Text';
import EyeIcon from '@/6shared/assets/icons/outline-eye.svg';
import { Card } from '@/6shared/ui/deprecated/Card';
import { Avatar, AvatarSize } from '@/6shared/ui/deprecated/Avatar';
import { AppLink } from '@/6shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { Article } from '../../model/types/article';
import { getRouteArticleDetails } from '@/6shared/const/router';
import { AppImage } from '@/6shared/ui/redesigned/AppImage';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;

    const image = (
        <AppImage
            fallback={<Skeleton width={300} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.image}
        />
    );
    const types = (
        <Text
            text={article.type.join(', ')}
            size={TextSize.S}
            className={cls.types}
        />
    );
    const date = (
        <Text text={article.createdAt} size={TextSize.S} className={cls.date} />
    );
    const views = (
        <HStack gap="0" className={cls.viewsWrapper} align="center">
            <EyeIcon className={cls.icon} />
            <Text
                text={String(article.views)}
                size={TextSize.S}
                className={cls.views}
            />
        </HStack>
    );

    if (view === ArticleView.LIST) {
        return (
            <AppLink
                data-testid="ArticleListItem"
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.link, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    {image}
                    <VStack gap="1" className={cls.detailsWrapper}>
                        <HStack gap="0" max={false}>
                            <Avatar
                                size={AvatarSize.SMALL}
                                src={article.user.avatar}
                            />
                            <Text
                                text={article.user.username}
                                size={TextSize.M}
                                className={cls.username}
                            />
                        </HStack>
                        <VStack gap="0">
                            <Text title={article.title} />
                            <Text text={article.subtitle} />
                        </VStack>
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
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
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
