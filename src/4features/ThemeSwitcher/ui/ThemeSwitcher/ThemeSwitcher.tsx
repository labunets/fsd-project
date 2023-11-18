import React, { memo, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import LightIcon from '@/6shared/assets/icons/brightness-white.svg';
import {
    Button as DeprecatedButton,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/6shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/5entities/User';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Button } from '@/6shared/ui/redesigned/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    square
                    variant="clear"
                    size="l"
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                    beforeIcon={<LightIcon />}
                />
            }
            off={
                <DeprecatedButton
                    theme={ButtonTheme.TERTIARY_INVERTED}
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                >
                    <LightIcon className={cls.svg} />
                </DeprecatedButton>
            }
        />
    );
});
