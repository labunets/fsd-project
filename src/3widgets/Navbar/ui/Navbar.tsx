import React, { useCallback, useState } from 'react';
import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from '6shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from '6shared/ui/Button/Button';
import { LoginModal } from '4features/authByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
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
