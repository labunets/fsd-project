import { classNames } from '6shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { ThemeSwitcher } from '4features/ThemeSwitcher';
import { LangSwitcher } from '4features/LangSwitcher';
import ChevronLeftIcon from '6shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '6shared/assets/icons/chevron-right.svg';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    // get collapsed from localstorage.getitem and setcollapsed
    const [collapsed, setCollapsed] = useState(() => {
        const collapsed = localStorage.getItem('collapsed');
        return collapsed === 'true';
    });

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
        localStorage.setItem('collapsed', String(!collapsed));
    };

    const itemsList = SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    ));

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
        >
            <div className={cls.items}>
                {itemsList}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                />
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.TERTIARY_INVERTED}
                    onClick={onToggle}
                >
                    {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Button>
            </div>
        </div>
    );
});
