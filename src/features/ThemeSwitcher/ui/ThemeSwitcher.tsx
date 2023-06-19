import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/brightness-white.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.TERTIARY}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {/* {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />} */}
            <LightIcon />
        </Button>
    );
};
