import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { User } from '@/5entities/User';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Button } from '@/6shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation();

    return (
        <VStack className={classNames('', {}, [className])} gap="2">
            <HStack gap="1">
                <Avatar src={author.avatar} size="s" />
                <Text size="s" text={author.username} bold />
                <Text size="s" text={createdAt} />
            </HStack>
            <Button onClick={onEdit}>{t('Edit')}</Button>
            <Text size="s" text={t('{{count}} views', { count: views })} />
        </VStack>
    );
});
