import React, { memo, useCallback, useState } from 'react';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button';
import { LoginModal } from '4features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '5entities/User';
import { Text } from '6shared/ui/Text/Text';
import { AppLink } from '6shared/ui/AppLink/AppLink';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import { Dropdown } from '6shared/ui/Dropdown/Dropdown';
import { Avatar } from '6shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <AppLink to={RoutePath.article_create}>
                        {t('New article')}
                    </AppLink>
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        trigger={<Avatar src={authData.avatar} />}
                        items={[
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
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.TERTIARY_INVERTED}
                    onClick={onShowModal}
                >
                    <Text text={t('Login')} />
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </div>
        </header>
    );
});
