import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';
import ChevronLeftIcon from 'shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from 'shared/assets/icons/chevron-right.svg';
import HomeIcon from 'shared/assets/icons/outline-home.svg';
import InfoIcon from 'shared/assets/icons/outline-info.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
        >
            <div className={cls.items}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.PRIMARY}
                        className={cls.item}
                    >
                        <HomeIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Home')}
                        </span>
                    </AppLink>

                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.PRIMARY}
                        className={cls.item}
                    >
                        <InfoIcon className={cls.icon} />
                        <span className={cls.link}>
                        {t('About')}
                        </span>
                    </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.TERTIARY}
                    onClick={onToggle}
                >
                    {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Button>
            </div>
        </div>
    );
};
