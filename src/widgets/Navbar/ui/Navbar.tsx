import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const { t } = useTranslation();

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
                {t('Home')}
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.PRIMARY}>
                {t('About')}
            </AppLink>
        </div>
    </div>
);
