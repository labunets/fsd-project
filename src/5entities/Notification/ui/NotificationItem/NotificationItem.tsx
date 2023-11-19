import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Card as DeprecatedCard } from '@/6shared/ui/deprecated/Card';
import { Text as DeprecatedText, TextSize } from '@/6shared/ui/deprecated/Text';
import { AppLink as DeprecatedAppLink } from '@/6shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Card } from '@/6shared/ui/redesigned/Card';
import { AppLink } from '@/6shared/ui/redesigned/AppLink';
import { Text } from '@/6shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text title={item.title} text={item.description} size="s" />
                </Card>
            }
            off={
                <DeprecatedCard
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <DeprecatedText
                        title={item.title}
                        text={item.description}
                        size={TextSize.S}
                    />
                </DeprecatedCard>
            }
        />
    );

    if (item.href) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <AppLink to={item.href} className={cls.link}>
                        {content}
                    </AppLink>
                }
                off={
                    <DeprecatedAppLink to={item.href} className={cls.link}>
                        {content}
                    </DeprecatedAppLink>
                }
            />
        );
    }

    return content;
});
