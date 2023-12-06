import { memo } from 'react';
import { Avatar as AvatarDeprecated, AvatarSize } from '@/6shared/ui/deprecated/Avatar';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/6shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/6shared/ui/deprecated/AppLink';
import { AppLink } from '@/6shared/ui/redesigned/AppLink';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/6shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/6shared/lib/features';
import { Card } from '@/6shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack data-testid="CommentCard.Loading">
                <HStack>
                    <Skeleton className={cls.avatar} width={32} height={32} border="50%" />
                    <Skeleton className={cls.username} width={100} height={24} />
                </HStack>
                <Skeleton className={cls.text} width="100%" height={16} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max className={cls.CommentCardRedesigned}>
                    <VStack data-testid="CommentCard.Content">
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack>
                                <Avatar
                                    size="s"
                                    src={comment.user.avatar}
                                    alt={comment.user.username}
                                />
                                <Text title={comment.user.username} bold className={cls.title} />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack className={cls.CommentCard} data-testid="CommentCard.Content">
                    <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                        <HStack>
                            <AvatarDeprecated
                                size={AvatarSize.SMALL}
                                src={comment.user.avatar}
                                alt={comment.user.username}
                            />
                            <Text title={comment.user.username} className={cls.title} />
                        </HStack>
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment.text} />
                </VStack>
            }
        />
    );
});
