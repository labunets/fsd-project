import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Avatar } from '6shared/ui/Avatar/Avatar';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import { Dropdown } from '6shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '5entities/User';
import { useDispatch, useSelector } from 'react-redux';

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
                        href: RoutePath.admin_panel,
                    }]
                    : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});
