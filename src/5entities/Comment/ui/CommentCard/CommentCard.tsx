import { memo } from 'react';
import { Avatar, AvatarSize } from '@/6shared/ui/deprecated/Avatar';
import { Text } from '@/6shared/ui/deprecated/Text';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';
import { AppLink } from '@/6shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/6shared/ui/deprecated/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/6shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack data-testid="CommentCard.Loading">
                <HStack>
                    <Skeleton
                        className={cls.avatar}
                        width={32}
                        height={32}
                        border="50%"
                    />
                    <Skeleton
                        className={cls.username}
                        width={100}
                        height={16}
                    />
                </HStack>
                <Skeleton className={cls.text} width="100%" height={32} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack className={cls.CommentCard} data-testid="CommentCard.Content">
            <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack>
                    <Avatar
                        size={AvatarSize.SMALL}
                        src={comment.user.avatar}
                        alt={comment.user.username}
                    />
                    <Text title={comment.user.username} className={cls.title} />
                </HStack>
            </AppLink>
            <Text text={comment.text} />
        </VStack>
    );
});
