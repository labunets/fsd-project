import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { AppImage } from '@/6shared/ui/redesigned/AppImage';
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton';
import { Text } from '@/6shared/ui/redesigned/Text';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import EyeIcon from '@/6shared/assets/icons/outline-eye.svg';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { AppLink } from '@/6shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/6shared/const/router';
import { Card } from '@/6shared/ui/redesigned/Card';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';
import { ArticleListItemProps } from '../ArticleListItem';
import { Button } from '@/6shared/ui/redesigned/Button';
import { ArticleTextBlock } from '../../../model/types/article';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const avatar = (
        <HStack gap="1" max={false}>
            <Avatar size="s" src={article.user.avatar} />
            <Text text={article.user.username} size="m" bold />
            <Text text={article.createdAt} size="m" />
        </HStack>
    );

    const title = (
        <VStack gap="0">
            <Text title={article.title} size="l" bold className={cls.title} />
            <Text title={article.subtitle} size="s" className={cls.title} />
        </VStack>
    );

    const image = (
        <AppImage
            fallback={<Skeleton height={420} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
        />
    );

    const views = (
        <HStack gap="1" max={false}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article.views)} size="m" />
            <Text
                text={article.type.join(', ')}
                size="m"
                className={cls.tags}
            />
        </HStack>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                max
                data-testid="ArticleListItem"
                className={classNames('', {}, [className, cls[view]])}
            >
                <VStack gap="1">
                    {avatar}
                    {title}
                    {image}
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            size="s"
                            className={cls.text}
                        />
                    )}
                    <HStack gap="1" max justify="between">
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button variant="outlined" className={cls.btn}>
                                {t('Read more')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
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
                        <HStack className={cls.infoWrapper}>{views}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
