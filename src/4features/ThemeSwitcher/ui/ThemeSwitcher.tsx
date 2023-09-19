import { classNames } from '6shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTheme } from '1app/providers/ThemeProvider';
import LightIcon from '6shared/assets/icons/brightness-white.svg';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.TERTIARY_INVERTED}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <LightIcon />
        </Button>
    );
});
