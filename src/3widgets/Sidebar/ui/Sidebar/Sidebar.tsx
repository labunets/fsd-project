import { useSelector } from 'react-redux';
import { memo, useMemo, useState } from 'react';
import { Button as DeprecatedButton, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { classNames } from '@/6shared/lib/classNames/classNames';
import ChevronLeftIcon from '@/6shared/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/6shared/assets/icons/chevron-right.svg';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/4features/ThemeSwitcher';
import { LangSwitcher } from '@/4features/LangSwitcher';
import { ToggleFeatures } from '@/6shared/lib/features';
// import { AppLogo } from '@/6shared/ui/redesigned/AppLogo';
import { Button } from '@/6shared/ui/redesigned/Button';

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

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem item={item} collapsed={collapsed} key={item.path} />
            )),
        [sidebarItemsList, collapsed],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [],
                    )}
                >
                    {/* <AppLogo className={cls.logo} size={collapsed ? 50 : 100} /> */}
                    <VStack
                        role="navigation"
                        gap="1"
                        align={collapsed ? 'center' : 'start'}
                        className={cls.items}
                    >
                        {itemsList}
                    </VStack>
                    <Button
                        data-testid="sidebar-toggle"
                        className={cls.collapseBtn}
                        variant="clear"
                        square
                        size="l"
                        onClick={onToggle}
                        beforeIcon={<ChevronRightIcon />}
                    />
                    <HStack gap={collapsed ? '1' : '2'} justify="center" className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} />
                    </HStack>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}
                >
                    <VStack
                        role="navigation"
                        gap="2"
                        align={collapsed ? 'center' : 'start'}
                        className={cls.items}
                    >
                        {itemsList}
                    </VStack>

                    <HStack gap="0" justify="between" className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} />
                        <DeprecatedButton
                            data-testid="sidebar-toggle"
                            theme={ButtonTheme.TERTIARY_INVERTED}
                            onClick={onToggle}
                        >
                            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </DeprecatedButton>
                    </HStack>
                </aside>
            }
        />
    );
});
