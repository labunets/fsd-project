import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/4features/AuthByUsername';
import { getUserAuthData } from '@/5entities/User';
import { NotificationButton } from '@/4features/notificationButton';
import { AvatarDropdown } from '@/4features/avatarDropdown';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Button } from '@/6shared/ui/redesigned/Button';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { AppLink } from '@/6shared/ui/deprecated/AppLink';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/6shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features';

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

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <div className={cls.links}>
                            <HStack gap="3" className={cls.actions}>
                                <NotificationButton />
                                <AvatarDropdown />
                            </HStack>
                        </div>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <div className={cls.links}>
                            <HStack gap="3" className={cls.actions}>
                                <AppLink to={getRouteArticleCreate()} className={cls.link}>
                                    {t('New article')}
                                </AppLink>
                                <NotificationButton />
                                <AvatarDropdown />
                            </HStack>
                        </div>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <div className={cls.links}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Button variant="clear" onClick={onShowModal}>
                            <Text text={t('Login')} />
                        </Button>
                    }
                    off={
                        <ButtonDeprecated
                            theme={ButtonTheme.TERTIARY_INVERTED}
                            onClick={onShowModal}
                        >
                            <TextDeprecated text={t('Login')} />
                        </ButtonDeprecated>
                    }
                />

                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </div>
        </header>
    );
});
