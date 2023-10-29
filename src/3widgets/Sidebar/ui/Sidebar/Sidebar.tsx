import { useSelector } from 'react-redux';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from '@/3widgets/ThemeSwitcher';
import { LangSwitcher } from '@/3widgets/LangSwitcher';
import { Button, ButtonTheme } from '@/6shared/ui/Button/Button';
import { classNames } from '@/6shared/lib/classNames/classNames';
import ChevronLeftIcon from '@/6shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/6shared/assets/icons/chevron-right.svg';
import { HStack, VStack } from '@/6shared/ui/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    // get collapsed from localstorage.getitem and setcollapsed
    const [collapsed, setCollapsed] = useState(() => {
        const collapsed = localStorage.getItem('collapsed');
        return collapsed === 'true';
    });
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
        localStorage.setItem('collapsed', String(!collapsed));
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [sidebarItemsList, collapsed]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
        >
            <VStack role="navigation" gap="2" align={collapsed ? 'center' : 'start'} className={cls.items}>
                {itemsList}
            </VStack>

            <HStack gap="0" justify="between" className={cls.switchers}>
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
            </HStack>
        </aside>
    );
});
