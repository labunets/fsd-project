import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="1"
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
            </VStack>
        );
    }

    return (
        <VStack
            gap="1"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
