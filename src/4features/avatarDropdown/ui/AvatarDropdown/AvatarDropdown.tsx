import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/5entities/User';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Avatar as DeprecatedAvatar } from '@/6shared/ui/deprecated/Avatar';
import { Dropdown as DeprecatedDropdown } from '@/6shared/ui/deprecated/Popups';
import { getRouteAdminPanel, getRouteProfile } from '@/6shared/const/router';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Dropdown } from '@/6shared/ui/redesigned/Popups';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={<Avatar src={authData.avatar} size="l" />}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t('Dashboard'),
                                      href: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            content: t('Profile'),
                            href: getRouteProfile(authData.id),
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                />
            }
            off={
                <DeprecatedDropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={<DeprecatedAvatar src={authData.avatar} />}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                  {
                                      content: t('Dashboard'),
                                      href: getRouteAdminPanel(),
                                  },
                              ]
                            : []),
                        {
                            content: t('Profile'),
                            href: getRouteProfile(authData.id),
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogout,
                        },
                    ]}
                />
            }
        />
    );
});
