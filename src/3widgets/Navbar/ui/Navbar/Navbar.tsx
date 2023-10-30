import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/4features/AuthByUsername';
import { getUserAuthData } from '@/5entities/User';
import { NotificationButton } from '@/4features/notificationButton';
import { AvatarDropdown } from '@/4features/avatarDropdown';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/6shared/ui/Button';
import { Text } from '@/6shared/ui/Text';
import { AppLink } from '@/6shared/ui/AppLink';
import { HStack } from '@/6shared/ui/Stack';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/6shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <HStack gap="3" className={cls.actions}>
                        <AppLink to={RoutePath.article_create}>
                            {t('New article')}
                        </AppLink>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
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