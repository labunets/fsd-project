import React, { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import LightIcon from '@/6shared/assets/icons/brightness-white.svg';
import { Button, ButtonTheme } from '@/6shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';

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
