import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/5entities/User';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/6shared/ui/deprecated/AppLink';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text } from '@/6shared/ui/deprecated/Text';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { SidebarItemTypes } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';
import { AppLink } from '@/6shared/ui/redesigned/AppLink';

interface SidebarItemProps {
    item: SidebarItemTypes;
    collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <AppLink
                    to={item.path}
                    className={classNames(
                        cls.itemRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [],
                    )}
                    activeClassName={cls.active}
                >
                    <HStack>
                        <item.Icon
                            className={cls.icon}
                            width={24}
                            height={24}
                        />
                        <Text text={t(item.text)} className={cls.link} />
                    </HStack>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    to={item.path}
                    theme={AppLinkTheme.SECONDARY}
                    className={classNames(
                        cls.item,
                        { [cls.collapsed]: collapsed },
                        [],
                    )}
                >
                    <HStack>
                        <item.Icon className={cls.icon} />
                        <Text text={t(item.text)} className={cls.link} />
                    </HStack>
                </AppLinkDeprecated>
            }
        />
    );
});
