import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
        console.log(setCollapsed);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}
        >
            <Button
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*LanguageSwitcher*/}
            </div>
        </div>
    );
};
