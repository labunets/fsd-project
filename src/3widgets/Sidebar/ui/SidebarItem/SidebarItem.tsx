import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/5entities/User';
import { AppLink, AppLinkTheme } from '@/6shared/ui/AppLink';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text } from '@/6shared/ui/Text';
import { HStack } from '@/6shared/ui/Stack';
import { SidebarItemTypes } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemTypes,
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <HStack>
                <item.Icon className={cls.icon} />
                <Text
                    text={t(item.text)}
                    className={cls.link}
                />
            </HStack>
        </AppLink>
    );
});
