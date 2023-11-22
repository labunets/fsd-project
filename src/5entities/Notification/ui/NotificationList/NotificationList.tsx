import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { Skeleton as DeprecatedSkeleton } from '@/6shared/ui/deprecated/Skeleton';
import { Skeleton as RedesignedSkeleton } from '@/6shared/ui/redesigned/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';
import { toggleFeatures } from '@/6shared/lib/features';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => RedesignedSkeleton,
        off: () => DeprecatedSkeleton,
    });

    if (isLoading) {
        return (
            <VStack gap="1" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
            </VStack>
        );
    }

    return (
        <VStack gap="1" max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
