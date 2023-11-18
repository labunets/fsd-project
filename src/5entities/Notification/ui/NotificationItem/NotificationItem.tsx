import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Card } from '@/6shared/ui/deprecated/Card';
import { Text, TextSize } from '@/6shared/ui/deprecated/Text';
import { AppLink } from '@/6shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text
                title={item.title}
                text={item.description}
                size={TextSize.S}
            />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink to={item.href} className={cls.link}>
                {content}
            </AppLink>
        );
    }

    return content;
});
