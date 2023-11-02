import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/5entities/User';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Avatar } from '@/6shared/ui/Avatar';
import { Dropdown } from '@/6shared/ui/Popups';
import { getRouteAdminPanel, getRouteProfile } from '@/6shared/const/router';

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
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            trigger={<Avatar src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Dashboard'),
                        href: getRouteAdminPanel(),
                    }]
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
    );
});
