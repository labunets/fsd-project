import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/6shared/ui/deprecated/Text';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack className={className}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('No comments')} />
            )}
        </VStack>
    );
});
