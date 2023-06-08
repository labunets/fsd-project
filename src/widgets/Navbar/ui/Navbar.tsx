import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.PRIMARY} >
                    Главная
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.PRIMARY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
