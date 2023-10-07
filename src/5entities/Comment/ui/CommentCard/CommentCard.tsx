import { classNames } from '6shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar, AvatarSize } from '6shared/ui/Avatar/Avatar';
import { Text } from '6shared/ui/Text/Text';
import { Skeleton } from '6shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} width={32} height={32} border="50%" />
                    <Skeleton className={cls.username} width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width="100%" height={32} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar size={AvatarSize.SMALL} src={comment.user.avatar} alt={comment.user.username} />
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
