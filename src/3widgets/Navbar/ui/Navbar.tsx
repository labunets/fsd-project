import React, { useCallback, useState } from 'react';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button';
import { LoginModal } from '4features/authByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '5entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.TERTIARY}
                        size={ButtonSize.S}
                        onClick={onLogout}
                    >
                        {t('Logout')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.TERTIARY}
                    size={ButtonSize.S}
                    onClick={onShowModal}
                >
                    {t('Login')}
                </Button>
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            </div>
        </div>
    );
};
