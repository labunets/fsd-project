import { classNames } from '6shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Button
                    key={tab.value}
                    className={classNames(cls.Tab)}
                    onClick={clickHandler(tab)}
                    active={tab.value === value}
                    theme={ButtonTheme.OTLINED}
                >
                    {tab.content}
                </Button>
            ))}
        </div>
    );
});
